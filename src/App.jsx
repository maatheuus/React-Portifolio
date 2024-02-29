import Header from "./Components/Header";
import IntroductionSection from "./Components/IntroductionSection";
import SkillsSection from "./Components/SkillsSection";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactForm from "./Components/ContactForm";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <IntroductionSection />
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactForm />
      </main>

      <footer className="footer"></footer>
    </>
  );
}
export default App;
