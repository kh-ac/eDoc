import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Flex
        bg={"linear-gradient(183deg, #67C3F3 -8.57%, #5A98F2 82.96%)"}
        color={"#FFF"}
        px={{ base: "50px", xl: "150px" }}
        py={"100px"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        direction={{ base: "column", xl: "row" }}
      >
        {/* Logo */}
        <Flex
          width={{ base: "100%", xl: "50%" }}
          height={"220px"}
          direction={"column"}
          justifyContent={"space-evenly"}
          textAlign={{ base: "center", xl: "start" }}
          mb={{ base: "50px", xl: "0px" }}
        >
          {/* Name and Logo */}
          <Text
            fontSize={"24px"}
            fontWeight={"700"}
            mb={{ base: "15px", xl: "0px" }}
          >
            eDoc
          </Text>

          {/*Description*/}
          <Text
            width={{ base: "100%", xl: "400px" }}
            fontSize={"18px"}
            fontWeight={"300"}
            lineHeight={"28px"}
            mb={{ base: "15px", xl: "0px" }}
          >
            eDoc provides progressive, and affordable healthcare, accessible on
            mobile and online for everyone.
          </Text>

          {/*Copyright*/}
          <Text fontSize={"16px"} fontWeight={"300"} lineHeight={"28px"}>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </Text>
        </Flex>

        {/* Company Region Help */}
        <Flex
          width={{ base: "100%", xl: "50%" }}
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-evenly"}
          alignItems={{ base: "center" }}
        >
          {/* Company */}
          <Flex
            width={"150px"}
            height={"220px"}
            direction={"column"}
            justifyContent={"space-evenly"}
            alignItems={{ base: "center", xl: "start" }}
          >
            <Text fontSize={"20px"} fontWeight={"700"}>
              Company
            </Text>
            <Text>About</Text>
            <Text>Testimonials</Text>
            <Text>Find a doctor</Text>
            <Text>Apps</Text>
          </Flex>

          {/* Region */}
          <Flex
            width={"150px"}
            height={"220px"}
            direction={"column"}
            justifyContent={"space-evenly"}
            alignItems={{ base: "center", xl: "start" }}
          >
            <Text fontSize={"20px"} fontWeight={"700"}>
              Region
            </Text>
            <Text>Indonesia</Text>
            <Text>Singapore</Text>
            <Text>Hong Kong</Text>
            <Text>Canada</Text>
          </Flex>

          {/* Help */}
          <Flex
            width={"150px"}
            height={"220px"}
            direction={"column"}
            justifyContent={"space-evenly"}
            alignItems={{ base: "center", xl: "start" }}
          >
            <Text fontSize={"20px"} fontWeight={"700"}>
              Help
            </Text>
            <Text>Help center</Text>
            <Text>Contact support</Text>
            <Text>Instructions</Text>
            <Text>How it works</Text>
          </Flex>
        </Flex>
      </Flex>
    </footer>
  );
};

export default Footer;
