import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Select,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import findDoctorImg from "../assets/images/find-doctor.svg";

const FindDoctor = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      specialization: "",
      wilaya: "",
    },
    onSubmit: (values) => {
      navigate(
        `/doctors?specialty=${values.specialization}&wilaya=${values.wilaya}`
      );
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
    "Adrar",
    "Chlef",
    "Laghouat",
    "Oum El Bouaghi",
    "Batna",
    "Béjaïa",
    "Biskra",
    "Béchar",
    "Blida",
    "Bouira",
    "Tamanrasset",
    "Tébessa",
    "Tlemcen",
    "Tiaret",
    "Tizi Ouzou",
    "Alger",
    "Djelfa",
    "Jijel",
    "Sétif",
    "Saïda",
    "Skikda",
    "Sidi Bel Abbès",
    "Annaba",
    "Guelma",
    "Constantine",
    "Médéa",
    "Mostaganem",
    "M'Sila",
    "Mascara",
    "Ouargla",
    "Oran",
    "El Bayadh",
    "Illizi",
    "Bordj Bou Arreridj",
    "Boumerdès",
    "El Tarf",
    "Tindouf",
    "Tissemsilt",
    "El Oued",
    "Khenchela",
    "Souk Ahras",
    "Tipaza",
    "Mila",
    "Aïn Defla",
    "Naâma",
    "Aïn Témouchent",
    "Ghardaïa",
    "Relizane",
    "Timimoun",
    "Bordj Badji Mokhtar",
    "Ouled Djellal",
    "Béni Abbès",
    "In Salah",
    "In Guezzam",
    "Touggourt",
    "Djanet",
    "El MGhair",
    "El Meniaa",
  ];

  return (
    <Flex
      direction={"column"}
      height={"100vh"}
      width={"100%"}
      //mt={"100px"}
      justifyContent={"center"}
    >
      <Navbar />

      <Flex
        width={"100%"}
        my={{ base: "20px", md: "50px", xl: "100px", "2xl": "150px" }}
        px={{ base: "20px", md: "50px", xl: "100px", "2xl": "150px" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={{ base: "center" }}
      >
        {/* Form */}
        <Box width={{ base: "90%", md: "40%" }}>
          <Heading mb={"50px"} fontSize={{ base: "22px", sm: "32px" }}>
            Make an online appointment at a Healthcare center
          </Heading>
          <form onSubmit={formik.handleSubmit}>
            <Flex direction={"column"} gap={4}>
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
                    <option value={wilaya}>{wilaya}</option>
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
            md: "50%",
            "2xl": "650px",
          }}
          src={findDoctorImg}
          display={{ base: "none", md: "block" }}
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
