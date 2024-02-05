import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//import TestimonialSlide from "./TestimonialSlide";
import testimonialImage from "../../assets/images/testimonial-1.png";

const TestimonialSection = () => {
  const testimonials = [
    {
      image: testimonialImage,
      fullName: "Edward Newgate",
      occupation: "Founder Circle",
      txt: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    },
    {
      image: testimonialImage,
      fullName: "Edward Newgate",
      occupation: "Founder Circle",
      txt: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    },
    {
      image: testimonialImage,
      fullName: "Edward Newgate",
      occupation: "Founder Circle",
      txt: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    },
  ];

  return (
    <Box id={"testimonials"} my={"200px"}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide>
              <TestimonialSlide
                fullName={testimonial.fullName}
                occupation={testimonial.occupation}
                image={testimonial.image}
                txt={testimonial.txt}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default TestimonialSection;

const TestimonialSlide = ({
  fullName,
  occupation,
  image,
  txt,
}: {
  fullName: string;
  occupation: string;
  image: string;
  txt: string;
}) => {
  return (
    <Box
      textAlign={"center"}
      width={{
        base: "250px",
        sm: "450px",
        md: "700px",
        lg: "950px",
        xl: "1200px",
      }}
      bg={"linear-gradient(208deg, #67C3F3 9.05%, #5A98F2 76.74%);"}
      py={"65px"}
      mx={"auto"}
      borderRadius={"25px"}
      color={"#FFF"}
    >
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Title */}
        <Flex
          width={{
            base: "200px",
            sm: "400px",
            md: "650px",
            lg: "900px",
            xl: "1150px",
          }}
          mb={"35px"}
          direction={"column"}
          alignItems={"center"}
        >
          <Heading
            as={"h3"}
            textAlign={"center"}
            fontWeight={"700"}
            fontSize={"36px"}
            mb={"25px"}
          >
            What our customers are saying{" "}
          </Heading>
          <Box
            width={"56px"}
            border={"2px solid #FFF"}
            borderRadius={"5px"}
          ></Box>
        </Flex>

        {/* Testimonial */}
        <Flex
          width={"100%"}
          direction={{ base: "column", xl: "row" }}
          justifyContent={{ base: "center", xl: "space-evenly" }}
          alignItems={"center"}
          mt={"40px"}
        >
          {/* Image and Name */}
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={5}
            alignItems={{ base: "center" }}
            justifyContent={"center"}
            mb={{ base: "30px", xl: "0" }}
          >
            <Image
              borderRadius={"50%"}
              border={"4px solid #FFF"}
              src={image}
            ></Image>
            <Flex direction={"column"} alignItems={{ base: "center" }}>
              <Text fontSize={"22px"} fontWeight={"700"}>
                {fullName}
              </Text>
              <Text fontSize={"18px"} fontWeight={"400"}>
                {occupation}
              </Text>
            </Flex>
          </Flex>

          {/* Quote */}
          <Text
            width={{
              base: "200px",
              sm: "400px",
              md: "650px",
              xl: "420px",
            }}
            textAlign={{ base: "center" }}
            fontSize={"19px"}
            fontWeight={"400"}
          >
            {txt}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
