import Doctor from "../../models/doctor";
const doctorResolvers = {
    Query: {
        doctors: async () => {
            return await Doctor.getAllDoctors();
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
