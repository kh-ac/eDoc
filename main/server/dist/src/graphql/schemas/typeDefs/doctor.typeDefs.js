import gql from "graphql-tag";
const doctorTypeDefs = gql `
  type Doctor {
    id: ID!
    fullNameEn: String!
    fullNameAr: String
    workTime: String
    specialties: String
    wilaya: String
    city: String
    address: String
    email: String
    phone1: String
    phone2: String
    createdAt: String
    updatedAt: String
  }
`;
export default doctorTypeDefs;
