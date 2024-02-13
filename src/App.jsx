import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { AboutUs } from "./components/AboutUs";
import { TeamMem } from "./components/TeamMem";
import AccordionComponent from "./components/Accordion";
import { OurWorks } from "./components/OurWork";
import { Testimonial } from "./components/Testimonial";
import { FeaturedIn } from "./components/FeaturedIn";
import { Clients } from "./components/Clients";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <AboutUs />
      <TeamMem />
      <AccordionComponent />
      <OurWorks />
      <Clients />
      <Testimonial />
      <FeaturedIn />
      <Footer />
    </>
  );
}

export default App;
