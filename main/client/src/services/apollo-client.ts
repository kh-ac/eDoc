import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://127.0.0.1:4000/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          doctors: {
            keyArgs: ["wilaya", "specialty"],
            merge(existing, incoming, { args }) {
              // Slicing is necessary because the existing data is
              // immutable, and frozen in development.
              const offset = args ? args.offset : 0;
              const merged = existing ? existing.slice(0) : [];
              for (let i = 0; i < incoming.length; ++i) {
                merged[offset + i] = incoming[i];
              }
              return merged;
            },
          },
        },
      },
    },
  }),
});

export default client;
