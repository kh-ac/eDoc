import { Flex } from "@chakra-ui/react";

const PageSection = ({ children }: { children: any }) => {
  return (
    <Flex
      mx={{ base: "20px", md: "50px", xl: "100px", "2xl": "150px" }}
      mb={"200px"}
      mt={"150px"}
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {children}
    </Flex>
  );
};

export default PageSection;
