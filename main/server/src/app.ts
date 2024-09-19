import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { allTypeDefs } from "./graphql/schemas/_index.schema.js";
import { allResolvers } from "./graphql/resolvers/_index.resolvers.js";

const server = new ApolloServer({
  typeDefs: allTypeDefs,
  resolvers: allResolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
