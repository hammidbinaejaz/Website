import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { BentoSkills } from "./components/BentoSkills";
import { BentoProjects } from "./components/BentoProjects";
import { BentoCertificatesHobbies } from "./components/BentoCertificatesHobbies";
import { BentoLearning } from "./components/BentoLearning";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <div id="skills">
          <BentoSkills />
        </div>
        <div id="projects">
          <BentoProjects />
        </div>
        <div id="about">
          <BentoCertificatesHobbies />
        </div>
        <BentoLearning />
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
