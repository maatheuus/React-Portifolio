import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import Projects from "./Projects";

function ProjectsSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`section-projects ${theme}`}>
      <h1 className="section-projects__title">
        <span>My</span> <span className="span-projects">Projects</span>
      </h1>
      <Projects />
      <Projects invertImage={true} />
      <Projects />
    </section>
  );
}

export default ProjectsSection;
