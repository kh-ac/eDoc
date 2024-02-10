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
import Doctor from "../../models/doctor";

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
      <Box width="100%" mt={"150px"}>
        <Navbar />

        {data.doctors.length > 0 ? (
          <Flex
            width={"100%"}
            direction={"column"}
            alignItems={"center"}
            //py={"100px"}
          >
            <Text textAlign={"center"} width={"100%"} fontSize="xl">
              {doctorsCountdata.doctorsCount} Doctors found
            </Text>

            {data.doctors.map((doctor: Doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}

            {data.doctors.length < doctorsCountdata.doctorsCount && (
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
                View More
              </Button>
            )}

            <Box height={"100px"}></Box>
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

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
  return (
    <Box width={{ base: "90%", sm: "80%", lg: "800px" }} my={5}>
      <Flex
        width={"100%"}
        direction={{ base: "column", lg: "row" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={10}
        boxShadow="md"
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <Image
          src={blanckProfilePicture}
          alt={`${doctor.fullNameEn}'s picture`}
          borderRadius="full"
          boxSize="150px"
          mb={{ base: "20px", lg: "0" }}
          mr={{ base: "0", lg: "40px" }}
        />

        {/* info */}
        <Flex
          direction={"column"}
          justifyContent={"space-evenly"}
          alignItems={{ base: "center", lg: "start" }}
          width={{ base: "80%", lg: "500px" }}
        >
          <Text
            noOfLines={2}
            fontWeight="bold"
            fontSize="lg"
            textAlign={{ base: "center", lg: "start" }}
          >
            {doctor.fullNameEn}
          </Text>
          <Text
            noOfLines={1}
            color="gray.600"
            fontSize="sm"
            mt={1}
            textAlign={{ base: "center", lg: "start" }}
          >
            {doctor.specialties + "."}
          </Text>
          <Badge
            //width={{ base: "100%", sm: "50%", md: "60%", lg: "200px" }}
            textAlign={"center"}
            colorScheme="teal"
            mt={2}
            px={4}
          >
            {doctor.city}
          </Badge>
        </Flex>

        <Flex
          height={"200px"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
        >
          <Button
            width={{ base: "100%", lg: "100%" }}
            height={"60px"}
            bg={"primary"}
            color={"white"}
            fontSize={{ base: "14px" }}
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
            width={{ base: "100%", lg: "100%" }}
            height={"60px"}
            border={"1px solid"}
            borderColor={"primary"}
            fontSize={{ base: "14px" }}
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
    </Box>
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
