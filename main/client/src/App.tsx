import { ChakraProvider } from "@chakra-ui/react";
import theme from "./utils/theme";

import "@fontsource/mulish/700.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/300.css";

import Routes from "./router/routes";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo-client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Routes />
      </ChakraProvider>
    </ApolloProvider>
  );
}
