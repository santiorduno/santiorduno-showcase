import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import ServiceSummary from "../sections/ServiceSummary";
import Services from "../sections/Services";
import ReactLenis from "lenis/react";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Contact from "../sections/Contact";
import { useScrollDepth } from "../hooks/useScrollDepth";
import { useVisitor } from "../hooks/useVisitor";

const HomePage = () => {
  useScrollDepth({ pageName: 'home' });
  useVisitor();

  return (
    <ReactLenis root className="relative w-screen min-h-screen">
      <Navbar />
      <Hero />
      <ServiceSummary />
      <Services />
      <About />
      <Projects />
      <Education />
      <Contact />
    </ReactLenis>
  );
};

export default HomePage;
