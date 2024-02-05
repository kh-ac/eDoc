import { Flex, Heading, Image, Text, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import searchDoctorImg from "../../assets/images/search-doctor-section.png";
import { Link } from "react-router-dom";

const DoctorSearchSection = () => {
  const { t } = useTranslation();

  return (
    <Flex
      height={"100vh"}
      mx={{ base: "20px", md: "50px", xl: "100px", "2xl": "150px" }}
      mt={{ base: "100px", md: "0" }}
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={{ base: "space-evenly" }}
    >
      {/* Texts */}
      <Flex
        width={{
          base: "250px",
          md: "45%",
        }}
        direction={"column"}
        alignItems={{ base: "center", md: "start" }}
        justifyContent={"center"}
        mb={{ base: "100px", md: "0px" }}
      >
        <Heading
          width={{
            base: "250px",
            sm: "300px",
            lg: "500px",
          }}
          as={"h1"}
          mb={"20px"}
          color={"black"}
          textAlign={{ base: "center", md: "start" }}
          fontSize={{ base: "32px", lg: "48px" }}
          fontWeight={"700"}
        >
          {t("Healthcare Made Easy")}
        </Heading>

        <Text
          width={{
            base: "250px",
            sm: "300px",
            lg: "400px",
            xl: "500px",
          }}
          mb={"45px"}
          color={"font.secondary"}
          textAlign={{ base: "center", md: "start" }}
          fontSize={{ base: "18px", lg: "21px" }}
          fontWeight={"300"}
        >
          {t("eDoc offers")}
        </Text>

        <Button
          width={"200px"}
          height={"60px"}
          borderRadius={"55px"}
          bg={"primary"}
          color={"white"}
          _hover={{
            bg: "white",
            color: "primary",
            border: "1px solid",
            borderColor: "primary",
          }}
        >
          <Link to={"/find-doctor"}>{t("Find a Doctor")}</Link>
        </Button>
      </Flex>

      {/* Image */}
      <Image
        width={{
          base: "250px",
          sm: "300px",
          md: "45%",

          "2xl": "650px",
        }}
        src={searchDoctorImg}
      ></Image>
    </Flex>
  );
};

export default DoctorSearchSection;
