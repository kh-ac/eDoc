import { GraphQLError } from "graphql";
import Doctor from "../../models/doctor";
const doctorResolvers = {
    Query: {
        doctors: async (_, { wilaya, specialty, offset, limit }) => {
            try {
                if (!wilaya || !specialty)
                    return new GraphQLError("Please provide a valid wilaya and specialty");
                return await Doctor.getDoctors({ wilaya, specialty, offset, limit });
            }
            catch (error) {
                console.log("Error finding doctors:", error);
            }
        },
        doctorsCount: async (_, { wilaya, specialty }) => {
            try {
                if (!wilaya || !specialty)
                    return new GraphQLError("Please provide a valid wilaya and specialty");
                return await Doctor.getDoctorsCount({ wilaya, specialty });
            }
            catch (error) {
                console.log("Error finding doctors:", error);
            }
        },
        // doctor: async (parent, { id }, { models }) => {
        //   return await models.Doctor.findByPk(id);
        // },
    },
    //   Mutation: {
    //     createDoctor: async (parent, { name, specialty }, { models }) => {
    //       return await models.Doctor.create({
    //         name,
    //         specialty,
    //       });
    //     },
    //     updateDoctor: async (parent, { id, name, specialty }, { models }) => {
    //       const doctor = await models.Doctor.findByPk(id);
    //       return await doctor.update({
    //         name,
    //         specialty,
    //       });
    //     },
    //     deleteDoctor: async (parent, { id }, { models }) => {
    //       return await models.Doctor.destroy({
    //         where: { id },
    //       });
    //     },
    //   },
};
export default doctorResolvers;
