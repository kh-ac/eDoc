import { useState } from "react";

import { gql, useQuery } from "@apollo/client";
import {
  Box,
  Text,
  Spinner,
  Center,
  Image,
  Heading,
  Flex,
  Badge,
  Button,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

import ErrorMessage from "../../components/ErrorMessage";
import noDataImg from "../../assets/images/no-data.svg";
import blanckProfilePicture from "../../assets/images/blank-profile-picture-973460.svg";

import Navbar from "../../components/Navbar";

export default function DoctorsPage() {
  const [loadingMore, setLoadingMore] = useState(false);
  const location = useLocation();
  const { specialty, wilaya } = queryString.parse(location.search);

  const { loading, error, data, fetchMore } = useQuery(GET_DOCTORS, {
    variables: { specialty, wilaya, offset: 0, limit: 10 },
    //notifyOnNetworkStatusChange: true,
  });

  const {
    loading: doctorsCountLoading,
    error: doctorsCountError,
    data: doctorsCountdata,
  } = useQuery(GET_DOCTORS_COUNT, {
    variables: { specialty, wilaya },
  });

  const loadMore = async () => {
    setLoadingMore(true);
    try {
      await fetchMore({
        variables: { offset: data.doctors.length, limit: 10 },
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingMore(false);
    }
  };

  if (loading || doctorsCountLoading)
    return (
      <Center height={"100vh"}>
        <Spinner
          thickness="4px"
          speed="0.75s"
          emptyColor="gray.200"
          color="primary"
          size="xl"
        />
      </Center>
    );
  if (error || doctorsCountError) return <ErrorMessage />;

  if (data && doctorsCountdata)
    return (
      <Box>
        <Navbar />

        <Flex>
            <form action=""></form>
        </Flex>

        {data.doctors.length > 0 ? (
          <Flex direction={"column"} alignItems={"center"}>
            <Box height={"150px"}></Box>

            <Text textAlign={"left"} width={"750px"} fontSize="xl">
              {doctorsCountdata.doctorsCount} Doctors found
            </Text>

            {data.doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}

            <Button
              textColor={"black"}
              bgColor={"primary"}
              mt={4}
              mb={"100px"}
              bg={"primary"}
              color={"white"}
              _hover={{
                bg: "white",
                color: "primary",
                border: "1px solid",
                borderColor: "primary",
              }}
              onClick={loadMore}
              isLoading={loadingMore}
            >
              Load More
            </Button>
          </Flex>
        ) : (
          <Center height={"100vh"} flexDirection={"column"}>
            <Heading as={"h1"} color={"primary"} mb={"50px"}>
              {" "}
              No Doctors Found ...
            </Heading>
            <Image src={noDataImg} />
          </Center>
        )}
      </Box>
    );
}

const DoctorCard = ({ doctor }) => {
  return (
    <Flex
      height={"250px"}
      width={"750px"}
      my={"20px"}
      // maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={10}
      boxShadow="md"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex>
        <Image
          mr={"50px"}
          src={blanckProfilePicture}
          alt={`${doctor.fullNameEn}'s picture`}
          borderRadius="full"
          boxSize="150px"
        />

        <Flex
          direction={"column"}
          justifyContent={"space-evenly"}
          width={"60%"}
        >
          <Text fontWeight="bold" fontSize="lg">
            {doctor.fullNameEn}
          </Text>
          <Text noOfLines={"1"} color="gray.600" fontSize="sm" mt={1}>
            {doctor.specialties + "."}
          </Text>
          <Badge width={"150px"} textAlign={"center"} colorScheme="teal" mt={2}>
            {doctor.city}
          </Badge>
        </Flex>
      </Flex>

      <Flex
        height={"100%"}
        direction={"column"}
        justifyContent={"space-evenly"}
      >
        <Button
          width={"200px"}
          height={"60px"}
          // mt={"50px"}
          // borderRadius={"55px"}
          bg={"primary"}
          color={"white"}
          _hover={{
            bg: "white",
            color: "primary",
            border: "1px solid",
            borderColor: "primary",
          }}
        >
          Make an Appointment
        </Button>

        <Button
          width={"200px"}
          height={"60px"}
          // mt={"50px"}
          // borderRadius={"55px"}
          border={"1px solid"}
          borderColor={"primary"}
          bg={"white"}
          color={"primary"}
          _hover={{
            bg: "primary",
            color: "white",
            border: "1px solid",
            borderColor: "white",
          }}
        >
          View Full Profile
        </Button>
      </Flex>
    </Flex>
  );
};

const GET_DOCTORS = gql`
  query Doctors(
    $wilaya: String
    $specialty: String
    $offset: Int
    $limit: Int
  ) {
    doctors(
      wilaya: $wilaya
      specialty: $specialty
      offset: $offset
      limit: $limit
    ) {
      id
      fullNameEn
      specialties
      city
    }
  }
`;

const GET_DOCTORS_COUNT = gql`
  query Query($wilaya: String, $specialty: String) {
    doctorsCount(wilaya: $wilaya, specialty: $specialty)
  }
`;
