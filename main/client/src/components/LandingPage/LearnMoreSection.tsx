import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";

import learnMoreImage from "../../assets/images/learn-more-section.png";

const LearnMoreSection = () => {
  return (
    <Flex
      //height={"100vh"}
      height={{base: "900px", md: "100%"}}
      mx={{ base: "20px", md: "50px", xl: "100px", "2xl": "150px" }}
      my={"200px"}
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={{ base: "space-evenly" }}
    >
      {/* Image */}
      <Image
        width={{
          base: "250px",
          sm: "300px",
          md: "45%",
          lg: "40%",
          "2xl": "650px",
        }}
        src={learnMoreImage}
        // mb={{ base: "100px", lg: "0px" }}
      ></Image>

      {/* Texts */}
      <Flex
        width={{
          base: "250px",
          md: "45%",
          "2xl": "35%",
        }}
        direction={"column"}
        alignItems={{ base: "center", md: "start" }}
      >
        <Heading
          as={"h1"}
          mb={"20px"}
          color={"#000"}
          textAlign={{ base: "center", md: "start" }}
          fontSize={{ base: "32px", lg: "36px" }}
          fontWeight={"700"}
        >
          Leading healthcare providers
        </Heading>

        <Text
          // width={{
          //   base: "250px",
          //   sm: "300px",
          //   lg: "400px",
          //   xl: "500px",
          // }}
          mb={"45px"}
          color={"font.secondary"}
          textAlign={{ base: "center", md: "start" }}
          fontWeight={"300"}
          fontSize={"18px"}
        >
          {" "}
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </Text>

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
          Learn More
        </Button>
      </Flex>
    </Flex>
  );
};

export default LearnMoreSection;
