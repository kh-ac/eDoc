import gql from "graphql-tag";
const doctorSchema = gql `
  type Query {
    doctors(
      wilaya: String
      specialty: String
      offset: Int
      limit: Int
    ): [Doctor!]!

    doctorsCount(wilaya: String, specialty: String): Int!
  }
`;
export default doctorSchema;
