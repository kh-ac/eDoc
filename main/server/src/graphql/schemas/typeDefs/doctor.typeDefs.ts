import gql from "graphql-tag";

const doctorTypeDefs = gql`
  type Doctor {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    address: String!
    specialty: String!
    createdAt: String!
    updatedAt: String!
  }
`;

export default doctorTypeDefs;
