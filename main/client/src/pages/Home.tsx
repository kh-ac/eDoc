import Navbar from "../components/Navbar";
import DoctorSearchSection from "../components/LandingPage/DoctorSearchSection";
import LearnMoreSection from "../components/LandingPage/LearnMoreSection";
import MobileAppSection from "../components/LandingPage/MobileAppSection";
import ServicesSection from "../components/LandingPage/ServicesSection";
import TestimonialSection from "../components/LandingPage/TestimonialSection";
import ArticlesSection from "../components/LandingPage/ArticlesSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <DoctorSearchSection />
      <ServicesSection />
      <LearnMoreSection />
      <MobileAppSection />
      <TestimonialSection />
      <ArticlesSection />
      <Footer />
    </>
  );
};

export default Home;
