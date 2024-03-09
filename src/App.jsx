import Header from "./Components/Header";
import IntroductionSection from "./Components/sectionCompo/IntroductionSection";
import SkillsSection from "./Components/sectionCompo/SkillsSection";
import AboutSection from "./Components/sectionCompo/AboutSection";
import ProjectsSection from "./Components/sectionCompo/ProjectsSection";
import ContactForm from "./Components/sectionCompo/ContactForm";
import ArrowTop from "./Components/svg/ArrowTop";

import ColorThemeContext from "./context/color-theme-context";
import handleClickTop from "./scrollInterview";
import Button from "./Components/Button";

function App() {
  return (
    <ColorThemeContext>
      <Header />

      <main className="content">
        <Button className="arrow-top" onClick={() => handleClickTop("header")}>
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
