import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#458FF6",
    navbar: {
      links: "#1F1534",
    },
    font: {
      primary: "#000",
      secondary: "#7D7987",
    },
  },

  fonts: {
    body: `"Mulish" , "sans-serif"`,
    heading: `"Mulish" , "sans-serif"`,
  },
});

export default theme;
