import { useRef } from "react";

import { useTranslation } from "react-i18next";
import {
  Flex,
  Heading,
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import logo from "../assets/images/logo-no-background.svg";

const Navbar = () => {
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sideMenuBtn = useRef();
  const { t, i18n } = useTranslation();

  const lngs = {
    en: { nativeName: " English" },
    fr: { nativeName: " French" },
  };

  //
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Find a Doctor",
      link: "/doctors",
    },
    {
      name: "Apps",
      link: "/apps",
    },
    {
      name: "Testimonials",
      link: "/testimonials",
    },
    {
      name: "About us",
      link: "/about",
    },
  ];

  return (
    <nav>
      <Flex
        width={"100%"}
        px={{ base: "20px", lg: "50px" }}
        py={"20px"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bg={"#FFF"}
        boxShadow={"10px 40px 50px 0px rgba(229, 233, 246, 0.40)"}
        position={"fixed"}
        top={"0"}
        zIndex={"5"}
      >
        {/* Logo */}
        <Link href="/" _hover={{}}>
          <Image height={{ base: "35px", lg: "50px" }} src={logo}></Image>
          {/* <Heading as={"h1"}>eDoc</Heading> */}
        </Link>

        {/* Hamburger Icon for smaller devices */}
        <IconButton
          ref={sideMenuBtn}
          aria-label="Open Menu"
          display={{ base: "block", lg: "none" }}
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant="outline"
        />

        {/* Side Drawer */}

        <Drawer
          placement="right"
          onClose={onClose}
          isOpen={isOpen}
          finalFocusRef={sideMenuBtn}
        >
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader
                boxShadow={"10px 40px 50px 0px rgba(229, 233, 246, 0.40)"}
              >
                <Link href="/" _hover={{}}>
                  <Image
                    height={{ base: "35px", lg: "50px" }}
                    src={logo}
                  ></Image>
                  {/* <Heading as={"h1"}>eDoc</Heading> */}
                </Link>
              </DrawerHeader>
              <DrawerBody my={"50px"}>
                {/* Navigation items */}
                <Flex
                  direction={"column"}
                  color={"navbar.links"}
                  fontWeight={"400"}
                  fontSize={"18px"}
                >
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      my={"15px"}
                      mx={"20px"}
                      fontSize={"18px"}
                      fontWeight={"500"}
                      _hover={{
                        textDecoration: "none",
                        fontWeight: "700",
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>

        {/* Navigation items */}
        <Flex
          color={"navbar.links"}
          fontWeight={"400"}
          fontSize={"18px"}
          display={{ base: "none", lg: "block" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              mx={"20px"}
              fontSize={"18px"}
              fontWeight={"500"}
              _hover={{
                textDecoration: "none",
                fontWeight: "700",
              }}
            >
              {item.name}
            </Link>
          ))}
        </Flex>

        {/* Language Switcher */}
        {/* {Object.keys(lngs).map((lng) => (
          <Button
            type="submit"
            key={lng}
            onClick={() => i18n.changeLanguage(lng)}
            disabled={i18n.resolvedLanguage === lng}
          >
            {lngs[lng].nativeName}
          </Button>
        ))} */}

        {/* Auth */}
        {/* <Flex gap={"2"} display={{ base: "none", lg: "block" }}>
          <Button
            width={"150px"}
            height={"50px"}
            borderRadius={"55px"}
            bg={"primary"}
            color={"white"}
          >
            Register
          </Button>

          <Button
            width={"150px"}
            height={"50px"}
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
            Register
          </Button>
        </Flex> */}
      </Flex>
    </nav>
  );
};

export default Navbar;
