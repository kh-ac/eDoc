import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Select,
  VStack,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import Navbar from "../components/Navbar";
import findDoctorImg from "../assets/images/find-doctor.svg";

const FindDoctor = () => {
  const formik = useFormik({
    initialValues: {
      specialization: "",
      wilaya: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const specialities = [
    "Addictologie",
    "Aide Soignant(e)",
    "Algologie",
    "Allergologie",
    "Anapath",
    "Andrologie",
    "Anesthésie - Réanimation",
    "Assistance médicale",
    "Association dans le médical",
    "Audioprothèse",
    "Auriculothérapie",
    "Biochimie",
    "Biologie",
    "Brûlologie",
    "Cabinet de groupe",
    "Cancérologie",
    "Cardio-Respiratoire",
    "Cardiologie",
    "Centre d'Audiométrie et de Prothèse Auditive",
    "Centre d'Imagerie Médicale",
    "Centre de dépistage Coronavirus",
    "Centre de diagnostique médical",
    "Centre de soins corporels",
    "Centre vaccination Covid-19",
    "Chirurgie Cardiovasculaire",
    "Chirurgie Cervico Faciale",
    "Chirurgie Cervico, Maxillo-Faciale, Réparatrice et Esthétique",
    "Chirurgie Coelioscopique",
    "Chirurgie Digestive",
    "Chirurgie Endocrinienne",
    "Chirurgie Esthétique",
    "Chirurgie Générale",
    "Chirurgie Gynécologique",
    "Chirurgie Orthopédique traumatologique",
    "Chirurgie Pédiatrique",
    "Chirurgie Thoracique",
    "Chirurgie Urologique",
    "Chirurgie Vasculaire",
    "Clinicienne d'enfants",
    "Cytopathologie",
    "Dentiste",
    "Dermatologie",
    "Diabétologie",
    "Endocrinologie",
    "Endocrinologie-Diabétologie",
    "Endodontie",
    "Epidémiologie",
    "Gastro-entérologie",
    "Gynécologie",
    "Gynécologie obstétrique",
    "Hématologie",
    "Hépato-Gastro-Entérologie",
    "Hépatologie",
    "Histologie",
    "Immunologie",
    "Implantologie",
    "Infectiologie",
    "Infirmier - Infirmière",
    "Kinesithérapie",
    "Laboratoire d'analyses médicales",
    "Laboratoire d'anatomie et cytologie pathologique",
    "Maladies des os et articulations",
    "Médecin assermenté",
    "Médecine d'urgence",
    "Médecine de travail",
    "Médecine dentaire spécialisé",
    "Médecine du sommeil",
    "Médecine du sport",
    "Médecine esthétique",
    "Médecine générale",
    "Médecine génétique",
    "Médecine interne",
    "Médecine légale",
    "Médecine néonatale",
    "Médecine nucléaire",
    "Médecine physique",
    "Mésothérapie",
    "Néphrologie",
    "Neurochirurgie",
    "Neurologie",
    "Neuropédiatrie",
    "Neurophysiologie",
    "Neuropsychiatrie",
    "Neuropsychologie",
    "Nutrition",
    "Odotologie conservatrice",
    "Omnipraticien",
    "Oncologie",
    "Ophtalmologie",
    "Opticien",
    "ORL (Oto-rhino-laryngologie)",
    "Orthodontie",
    "Orthopédie Dento-Faciale",
    "Orthopédie pédiatrique",
    "Orthophonie",
    "Orthoptie",
    "Ostéopathie",
    "Parapsychologie",
    "Parasitologie",
    "Parodontologie",
    "Patho Bucco Dentaire",
    "Pathologie et chirurgie buccale",
    "Pédiatrie",
    "Pédodontie",
    "Pédopsychiatrie",
    "Pharmacie",
    "Physiologie",
    "PMI (Protection Maternelle et Infantile)",
    "Pneumo-allergologie pédiatrique",
    "Pneumo-phtisiologie",
    "Podologie",
    "Prothèse dentaire",
    "Psychiatrie",
    "Psychologie",
    "Psychopédagogie",
    "Psychothérapie",
    "Réanimation",
    "Rééducation Fonctionnelle",
    "Rhumatologie",
    "Sage femme",
    "Sénologie",
    "Sexologie",
    "Tourisme Médical",
    "Toxicologie",
    "Vénéréologie",
    "Vente matériels & Consommables médicales",
    "Vétérinaire",
  ];

  const optionsTextEnglish = [
    "Addiction Medicine",
    "Nursing Assistant",
    "Algology",
    "Allergology",
    "Anatomical Pathology",
    "Andrology",
    "Anesthesia - Resuscitation",
    "Medical Assistance",
    "Association in Medicine",
    "Audioprosthesis",
    "Auriculotherapy",
    "Biochemistry",
    "Biology",
    "Burn Medicine",
    "Group Practice",
    "Oncology",
    "Cardio-Respiratory",
    "Cardiology",
    "Audiometry and Hearing Aid Center",
    "Medical Imaging Center",
    "Coronavirus Screening Center",
    "Medical Diagnostic Center",
    "Body Care Center",
    "Covid-19 Vaccination Center",
    "Cardiovascular Surgery",
    "Cervico Facial Surgery",
    "Cervico-Maxillo-Facial, Reconstructive, and Aesthetic Surgery",
    "Laparoscopic Surgery",
    "Digestive Surgery",
    "Endocrine Surgery",
    "Aesthetic Surgery",
    "General Surgery",
    "Gynecological Surgery",
    "Orthopedic Traumatology Surgery",
    "Pediatric Surgery",
    "Thoracic Surgery",
    "Urological Surgery",
    "Vascular Surgery",
    "Children's Clinician",
    "Cytopathology",
    "Dentist",
    "Dermatology",
    "Diabetology",
    "Endocrinology",
    "Endocrinology-Diabetology",
    "Endodontics",
    "Epidemiology",
    "Gastroenterology",
    "Gynecology",
    "Obstetric Gynecology",
    "Hematology",
    "Hepato-Gastro-Enterology",
    "Hepatology",
    "Histology",
    "Immunology",
    "Implantology",
    "Infectiology",
    "Nurse",
    "Physiotherapy",
    "Medical Laboratory",
    "Anatomy and Pathological Cytology Laboratory",
    "Bone and Joint Diseases",
    "Sworn Doctor",
    "Emergency Medicine",
    "Occupational Medicine",
    "Specialized Dental Medicine",
    "Sleep Medicine",
    "Sports Medicine",
    "Aesthetic Medicine",
    "General Medicine",
    "Medical Genetics",
    "Internal Medicine",
    "Legal Medicine",
    "Neonatal Medicine",
    "Nuclear Medicine",
    "Physical Medicine",
    "Mesotherapy",
    "Nephrology",
    "Neurosurgery",
    "Neurology",
    "Neuropediatrics",
    "Neurophysiology",
    "Neuropsychiatry",
    "Neuropsychology",
    "Nutrition",
    "Conservative Otology",
    "General Practitioner",
    "Oncology",
    "Ophthalmology",
    "Optician",
    "ENT (Oto-rhino-laryngology)",
    "Orthodontics",
    "Orthopedic Dento-Facial",
    "Pediatric Orthopedics",
    "Speech Therapy",
    "Orthoptics",
    "Osteopathy",
    "Parapsychology",
    "Parasitology",
    "Periodontology",
    "Bucco-Dental Pathology",
    "Oral Pathology and Surgery",
    "Pediatrics",
    "Pedodontics",
    "Child Psychiatry",
    "Pharmacy",
    "Physiology",
    "Maternal and Child Protection",
    "Pediatric Pneumo-Allergology",
    "Pneumo-Phthisiology",
    "Podiatry",
    "Dental Prosthetics",
    "Psychiatry",
    "Psychology",
    "Psychopedagogy",
    "Psychotherapy",
    "Resuscitation",
    "Functional Rehabilitation",
    "Rheumatology",
    "Midwife",
    "Senology",
    "Sexology",
    "Medical Tourism",
    "Toxicology",
    "Venereology",
    "Sale of Medical Equipment & Consumables",
    "Veterinarian",
  ];

  const wilayas = [
    // { value: 0, text: "Wilaya ..." },
    { value: 1, text: "Adrar" },
    { value: 2, text: "Chlef" },
    { value: 3, text: "Laghouat" },
    { value: 4, text: "Oum El Bouaghi" },
    { value: 5, text: "Batna" },
    { value: 6, text: "Béjaïa" },
    { value: 7, text: "Biskra" },
    { value: 8, text: "Béchar" },
    { value: 9, text: "Blida" },
    { value: 10, text: "Bouira" },
    { value: 11, text: "Tamanrasset" },
    { value: 12, text: "Tébessa" },
    { value: 13, text: "Tlemcen" },
    { value: 14, text: "Tiaret" },
    { value: 15, text: "Tizi Ouzou" },
    { value: 16, text: "Alger" },
    { value: 17, text: "Djelfa" },
    { value: 18, text: "Jijel" },
    { value: 19, text: "Sétif" },
    { value: 20, text: "Saïda" },
    { value: 21, text: "Skikda" },
    { value: 22, text: "Sidi Bel Abbès" },
    { value: 23, text: "Annaba" },
    { value: 24, text: "Guelma" },
    { value: 25, text: "Constantine" },
    { value: 26, text: "Médéa" },
    { value: 27, text: "Mostaganem" },
    { value: 28, text: "M'Sila" },
    { value: 29, text: "Mascara" },
    { value: 30, text: "Ouargla" },
    { value: 31, text: "Oran" },
    { value: 32, text: "El Bayadh" },
    { value: 33, text: "Illizi" },
    { value: 34, text: "Bordj Bou Arreridj" },
    { value: 35, text: "Boumerdès" },
    { value: 36, text: "El Tarf" },
    { value: 37, text: "Tindouf" },
    { value: 38, text: "Tissemsilt" },
    { value: 39, text: "El Oued" },
    { value: 40, text: "Khenchela" },
    { value: 41, text: "Souk Ahras" },
    { value: 42, text: "Tipaza" },
    { value: 43, text: "Mila" },
    { value: 44, text: "Aïn Defla" },
    { value: 45, text: "Naâma" },
    { value: 46, text: "Aïn Témouchent" },
    { value: 47, text: "Ghardaïa" },
    { value: 48, text: "Relizane" },
    { value: 49, text: "Timimoun" },
    { value: 50, text: "Bordj Badji Mokhtar" },
    { value: 51, text: "Ouled Djellal" },
    { value: 52, text: "Béni Abbès" },
    { value: 53, text: "In Salah" },
    { value: 54, text: "In Guezzam" },
    { value: 55, text: "Touggourt" },
    { value: 56, text: "Djanet" },
    { value: 57, text: "El MGhair" },
    { value: 58, text: "El Meniaa" },
  ];

  const doctors = [
    {
      picture: "https://bit.ly/dan-abramov",
      fullName: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "Algiers",
    },
    {
      picture: "https://bit.ly/dan-abramov",
      fullName: "Dr. Jane Doe",
      specialization: "Dentist",
      address: "Oran",
    },
    {
      picture: "https://bit.ly/dan-abramov",
      fullName: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "Algiers",
    },
    {
      picture: "https://bit.ly/dan-abramov",
      fullName: "Dr. Jane Doe",
      specialization: "Dentist",
      address: "Oran",
    },
    {
      picture: "https://bit.ly/dan-abramov",
      fullName: "Dr. John Doe",
      specialization: "Cardiologist",
      address: "Algiers",
    },
    {
      picture: "https://bit.ly/dan-abramov",
      fullName: "Dr. Jane Doe",
      specialization: "Dentist",
      address: "Oran",
    },
  ];

  return (
    <Flex direction={"column"} height={"100vh"} width={"100%"} mt={"150px"}>
      <Navbar />

      <Flex
        mt={"150px"}
        mx={{ base: "20px", md: "50px", xl: "100px", "2xl": "150px" }}
        justifyContent={"space-between"}
      >
        {/* Form */}
        <Box width={"40%"}>
          <Heading mb={"50px"}>
            Make an online appointment at a Healthcare center
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <Flex direction={"column"}>
              <FormControl>
                <FormLabel>Specialization</FormLabel>
                <Select
                  value={formik.values.specialization}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="specialization"
                  placeholder="Select Specialization"
                >
                  {specialities.map((speciality) => (
                    <option value={speciality}>{speciality}</option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Wilaya</FormLabel>
                <Select
                  value={formik.values.wilaya}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="wilaya"
                  placeholder="Select Wilaya"
                >
                  {wilayas.map((wilaya) => (
                    <option value={wilaya.value}>{wilaya.text}</option>
                  ))}
                </Select>
              </FormControl>

              <Button
                width={"200px"}
                height={"60px"}
                mt={"50px"}
                borderRadius={"55px"}
                bg={"primary"}
                color={"white"}
                _hover={{
                  bg: "white",
                  color: "primary",
                  border: "1px solid",
                  borderColor: "primary",
                }}
                type={"submit"}
              >
                Find Doctors
              </Button>
            </Flex>
          </form>
        </Box>

        <Image
          width={{
            base: "250px",
            sm: "300px",
            md: "45%",
            "2xl": "650px",
          }}
          src={findDoctorImg}
        ></Image>
      </Flex>

      {/* Results */}
      {/* <Flex
        direction={"column"}
        width={"100%"}
        mt={"100"}
        alignItems={"center"}
      >
        {doctors.map((doctor) => DoctorCard(doctor))}
      </Flex> */}
    </Flex>
  );
};

export default FindDoctor;

const DoctorCard = ({ picture, fullName, specialization, address }) => {
  return (
    <Flex
      height={"250px"}
      width={"50%"}
      my={"20px"}
      // maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={10}
      boxShadow="md"
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex>
        <Image
          mr={"50px"}
          src={picture}
          alt={`${fullName}'s picture`}
          borderRadius="full"
          boxSize="150px"
        />

        <Flex direction={"column"} justifyContent={"space-evenly"}>
          <Text fontWeight="bold" fontSize="lg">
            {fullName}
          </Text>
          <Text color="gray.600" fontSize="sm" mt={1}>
            {specialization}
          </Text>
          <Badge textAlign={"center"} colorScheme="teal" mt={2}>
            {address}
          </Badge>
        </Flex>
      </Flex>

      <Flex
        height={"100%"}
        direction={"column"}
        justifyContent={"space-evenly"}
      >
        <Button
          width={"200px"}
          height={"60px"}
          // mt={"50px"}
          // borderRadius={"55px"}
          bg={"primary"}
          color={"white"}
          _hover={{
            bg: "white",
            color: "primary",
            border: "1px solid",
            borderColor: "primary",
          }}
        >
          Make an Appointment
        </Button>

        <Button
          width={"200px"}
          height={"60px"}
          // mt={"50px"}
          // borderRadius={"55px"}
          border={"1px solid"}
          borderColor={"primary"}
          bg={"white"}
          color={"primary"}
          _hover={{
            bg: "primary",
            color: "white",
            border: "1px solid",
            borderColor: "white",
          }}
        >
          View Full Profile
        </Button>
      </Flex>
    </Flex>
  );
};
