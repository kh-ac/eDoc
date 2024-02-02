import gql from "graphql-tag";
const doctorSchema = gql `
  type Query {
    doctors: [Doctor!]!
  }
`;
export default doctorSchema;
