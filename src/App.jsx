import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechMarquee from "./components/TechMarquee";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Certificates from "./components/Certificates";
import GitHub from "./components/GitHub";
import Testimonials from "./components/Testimonials";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechMarquee />
        <Skills />
        <Services />
        <Projects />
        <Timeline />
        <Certificates />
        <GitHub />
        <Testimonials />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
