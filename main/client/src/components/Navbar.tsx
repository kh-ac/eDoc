import { useRef } from "react";

import { useTranslation } from "react-i18next";
import {
  Flex,
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
  Select,
  Menu,
  MenuItem,
  MenuButton,
  MenuList,
  Button,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ReactScrollLink } from "react-scroll";

import logo from "../assets/images/logo-no-background.svg";

const Navbar = () => {
  //
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sideMenuBtn = useRef();
  const { t, i18n } = useTranslation();

  const lngs = {
    ar: { nativeName: "🇩🇿  Arabic" },
    fr: { nativeName: "🇫🇷  French" },
    en: { nativeName: "🇺🇸  English" },
  };

  //
  const navItems = [
    {
      name: t("Home"),
      link: "/",
    },
    {
      name: t("Services"),
      link: "/doctors",
    },
    {
      name: t("Apps"),
      link: "/apps",
    },
    {
      name: t("Testimonials"),
      link: "/testimonials",
    },
    {
      name: t("About us"),
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
                <Select
                  display={{ base: "block", lg: "none" }}
                  width={"150px"}
                  textAlign={"center"}
                  value={i18n.language}
                  onChange={(e) => i18n.changeLanguage(e.target.value)}
                >
                  {Object.keys(lngs).map((lng) => (
                    <option value={lng}>{lngs[lng].nativeName}</option>
                  ))}
                </Select>
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
          direction={"row"}
          color={"navbar.links"}
          fontWeight={"400"}
          fontSize={"18px"}
          display={{ base: "none", lg: "block" }}
        >
          <Link
            href={"/home"}
            mx={"20px"}
            fontSize={"18px"}
            fontWeight={"500"}
            _hover={{
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            {t("Home")}
          </Link>

          <Menu>
            <MenuButton
              bg={"transparent"}
              _hover={{
                bg: "transparent",
                textDecoration: "none",
                fontWeight: "700",
              }}
              fontSize={"18px"}
              fontWeight={"500"}
              textAlign={"center"}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              {t("Services")}
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link
                  href={"/find-doctor"}
                  mx={"20px"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  _hover={{
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                >
                  {t("Find Doctor")}
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  href={"/find-blood-donor"}
                  mx={"20px"}
                  fontSize={"18px"}
                  fontWeight={"500"}
                  _hover={{
                    textDecoration: "none",
                    fontWeight: "700",
                  }}
                >
                  {t("Find Blood Donors")}
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>

          <Link
            mx={"20px"}
            fontSize={"18px"}
            fontWeight={"500"}
            _hover={{
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            <ReactScrollLink
              to="apps"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              {t("Apps")}
            </ReactScrollLink>
          </Link>

          <Link
            mx={"20px"}
            fontSize={"18px"}
            fontWeight={"500"}
            _hover={{
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            <ReactScrollLink
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-300}
              duration={500}
            >
              {t("Testimonials")}
            </ReactScrollLink>
          </Link>

          <Link
            href={""}
            mx={"20px"}
            fontSize={"18px"}
            fontWeight={"500"}
            _hover={{
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            {t("About us")}
          </Link>

          {/* {navItems.map((item) => (
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
          ))} */}
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

        <Select
          display={{ base: "none", lg: "block" }}
          width={"150px"}
          textAlign={"center"}
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          {Object.keys(lngs).map((lng) => (
            <option value={lng}>{lngs[lng].nativeName}</option>
          ))}
        </Select>

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
