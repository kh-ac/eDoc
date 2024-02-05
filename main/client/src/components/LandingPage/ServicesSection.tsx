import {
  Flex,
  Text,
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Button,
} from "@chakra-ui/react";

import service1Img from "../../assets/images/service-1.svg";
import service2Img from "../../assets/images/service-2.svg";
import service3Img from "../../assets/images/service-3.svg";
import service4Img from "../../assets/images/service-4.svg";
import service5Img from "../../assets/images/service-5.svg";
import service6Img from "../../assets/images/service-6.svg";

const ServicesSection = () => {
  const services = [
    {
      image: service1Img,
      title: "Search doctor",
      subTitle:
        "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    },

    {
      image: service2Img,
      title: "Online pharmacy",
      subTitle:
        "Buy  your medicines with our mobile application with a simple delivery system",
    },

    {
      image: service3Img,
      title: "Consultation",
      subTitle:
        "Free consultation with our trusted doctors and get the best recomendations",
    },

    {
      image: service4Img,
      title: "Details info",
      subTitle:
        "Free consultation with our trusted doctors and get the best recomendations",
    },

    {
      image: service5Img,
      title: "Emergency care",
      subTitle:
        "You can get 24/7 urgent care for yourself or your children and your lovely family",
    },

    {
      image: service6Img,
      title: "Tracking",
      subTitle: "Track and save your medical history and health data ",
    },
  ];

  return (
    <Flex
      id="services"
      mx={{ base: "20px", lg: "250px" }}
      my={"200px"}
      direction={"column"}
      alignItems={"center"}
    >
      {/* Our Services Title */}
      <Flex mb={"35px"} direction={"column"} alignItems={"center"}>
        <Heading
          width={{
            base: "250px",
            sm: "300px",
            lg: "500px",
          }}
          as={"h3"}
          textAlign={"center"}
          fontWeight={"700"}
          fontSize={"36px"}
          color={"#000"}
          mb={"25px"}
        >
          Our Services
        </Heading>
        <Box
          width={"56px"}
          border={"2px solid #000"}
          borderRadius={"5px"}
        ></Box>
      </Flex>

      {/* Services Subtitle */}
      <Text
        width={{
          base: "200px",
          sm: "350px",
          md: "500px",
          lg: "750px",
          xl: "950px",
        }}
        textAlign={"center"}
        color={"font.secondary"}
        fontSize={"18px"}
        fontWeight={"300"}
        mb={"35px"}
      >
        We provide to you the best choiches for you. Adjust it to your health
        needs and make sure your undergo treatment with our highly qualified
        doctors you can consult with us which type of service is suitable for
        your health
      </Text>

      {/* Services Cards */}
      <Grid
        width={"100%"}
        gridTemplateRows={"repeat(2,minmax(360px, 1fr))"}
        gridTemplateColumns={{
          base: "repeat(auto-fit,minmax(225px ,1fr))",
          sm: "repeat(auto-fit,minmax(350px ,1fr))",
        }}
        placeItems={"center"}
        mb={"70px"}
        gap={"10"}
      >
        {services.map((service) => {
          return (
            <GridItem>
              <Flex
                p={"20px"}
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                px={"20px"}
                borderRadius={"20px"}
                boxShadow={"10px 40px 50px 0px rgba(229, 233, 246, 0.40)"}
              >
                <Image
                  mb={"30px"}
                  height={"90px"}
                  width={"90px"}
                  src={service.image}
                ></Image>
                <Heading
                  as={"h4"}
                  fontWeight={"700"}
                  fontSize={"24px"}
                  color={"#000"}
                  mb={"10px"}
                >
                  {service.title}
                </Heading>
                <Text
                  textAlign={"center"}
                  textOverflow={"clip"}
                  color={"font.secondary"}
                  fontSize={"18px"}
                  fontWeight={"300"}
                >
                  {service.subTitle}
                </Text>
              </Flex>
            </GridItem>
          );
        })}
      </Grid>

      {/* Learn More Button */}
      <Button
        width={"200px"}
        height={"60px"}
        borderRadius={"55px"}
        border={"1px solid"}
        borderColor={"primary"}
        bg={"white"}
        color={"primary"}
        _hover={{
          bg: "primary",
          color: "white",
          border: "1px solid",
          borderColor: "primary",
        }}
      >
        Learn More{" "}
      </Button>
    </Flex>
  );
};

export default ServicesSection;
