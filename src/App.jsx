import Header from "./Components/Header";
import IntroductionSection from "./Components/IntroductionSection";
import SkillsSection from "./Components/SkillsSection";
import AboutSection from "./Components/AboutSection";

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <IntroductionSection />
        <SkillsSection />
        <AboutSection />
      </main>
    </>
  );
}
export default App;
