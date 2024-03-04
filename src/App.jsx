import Button from "./Components/Button";

import Header from "./Components/Header";
import IntroductionSection from "./Components/IntroductionSection";
import SkillsSection from "./Components/SkillsSection";
import AboutSection from "./Components/AboutSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactForm from "./Components/ContactForm";
import ArrowTop from "./Components/svg/ArrowTop";

import ColorThemeContext from "./context/color-theme-context";
function App() {
  return (
    <ColorThemeContext>
      <Header />

      <main className="content">
        <Button className="arrow-top">
          <ArrowTop className="svg" />
        </Button>
        <IntroductionSection />
        <SkillsSection />
        <AboutSection />
        <ProjectsSection />
        <ContactForm />
      </main>

      <footer className="footer"></footer>
    </ColorThemeContext>
  );
}
export default App;
