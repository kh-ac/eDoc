import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import PageSection from "./PageSection";
import mobileAppSection from "../../assets/images/mobile-app-section.png";

const MobileAppSection = () => {
  return (
    <PageSection>
      {/* Texts */}
      <Flex
        width={{
          base: "250px",
          md: "45%",
        }}
        direction={"column"}
        alignItems={{ base: "center", md: "start" }}
        textAlign={{ base: "center", md: "start" }}
        justifyContent={"center"}
        mb={{ base: "100px", md: "0px" }}
      >
        <Heading
          // width={{
          //   base: "250px",
          //   sm: "300px",
          //   lg: "500px",
          // }}
          as={"h1"}
          mb={"20px"}
          color={"black"}
          fontSize={"36px"}
          fontWeight={"700"}
        >
          Download our mobile apps
        </Heading>

        <Text
          // width={{
          //   base: "250px",
          //   sm: "300px",
          //   lg: "400px",
          //   xl: "500px",
          // }}
          mb={"45px"}
          textAlign={{ base: "center", md: "start" }}
          fontSize={{ base: "18px", lg: "21px" }}
          color={"font.secondary"}
          fontWeight={"300"}
        >
          {" "}
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedeous form, long calls, or
          administrative hassle) and securely
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
          rightIcon={<ArrowDownIcon />}
        >
          Download{" "}
        </Button>
      </Flex>

      {/* Image */}
      <Image
        width={{
          base: "250px",
          sm: "300px",
          md: "45%",
          lg: "50%",
          "2xl": "650px",
        }}
        src={mobileAppSection}
      ></Image>
    </PageSection>
  );
};

export default MobileAppSection;
