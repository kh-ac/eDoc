import { Box, Flex, Heading, Image, Button, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import article1Img from "../../assets/images/article-1.png";
import article2Img from "../../assets/images/article-2.png";
import article3Img from "../../assets/images/article-3.png";

const ArticlesSection = () => {
  const articles = [
    {
      image: article1Img,
      title: "Disease detection, check  up in the laboratory",
      description:
        "In this case, the role of the health laboratory is very important to doa disease detection...",
    },
    {
      image: article2Img,
      title: "Herbal medicines that are safe for consumption",
      description:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
    },
    {
      image: article3Img,
      title: "Natural care for healthy facial skin",
      description:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
    },
  ];

  return (
    <Box
      textAlign={"center"}
      my={"200px"}
      mx={{ base: "20px", md: "50px", "2xl": "200px" }}
    >
      <Flex mb={"35px"} direction={"column"} alignItems={"center"}>
        {/* Title */}
        <Heading
          as={"h3"}
          textAlign={"center"}
          fontWeight={"700"}
          fontSize={"36px"}
          color={"#000"}
          mb={"25px"}
        >
          Check out our latest articles
        </Heading>
        <Box
          width={"56px"}
          border={"2px solid #000"}
          borderRadius={"5px"}
        ></Box>
      </Flex>

      {/* Articles */}
      <Flex justifyContent={"center"} flexWrap={"wrap"} gap={"10"} mb={"70px"}>
        {articles.map((article) => {
          return (
            <ArticleCard
              image={article.image}
              title={article.title}
              description={article.description}
            />
          );
        })}
      </Flex>

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
        View All{" "}
      </Button>
    </Box>
  );
};

export default ArticlesSection;

const ArticleCard = ({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) => {
  return (
    <Box
      borderRadius={"20px"}
      width={"370px"}
      borderBottomRadius={"20px"}
      boxShadow={" 10px 40px 50px 0px rgba(229, 233, 246, 0.40)"}
    >
      <Flex direction={"column"}>
        {/* Image */}
        <Image
          mb={"20px"}
          height={"250px"}
          src={image}
          borderTopRadius={"20px"}
        />

        {/* Title */}
        <Text
          height={{ base: "120px", sm: "75px" }}
          px={"20px"}
          fontSize={"21px"}
          fontWeight={"700"}
        >
          {title}
        </Text>

        {/* Description */}
        <Text mb={"20px"} height={"85px"} px={"20px"}>
          {description}
        </Text>

        {/* Read More Link */}
        <Button
          height={"70px"}
          px={"20px"}
          bg={"#FFF"}
          color={"primary"}
          fontSize={"17"}
          fontWeight={"600"}
          rightIcon={<ArrowForwardIcon />}
          _hover={{ color: "#050A30" }}
        >
          Read more{" "}
        </Button>
      </Flex>
    </Box>
  );
};
