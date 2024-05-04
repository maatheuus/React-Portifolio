import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import { projects } from "../util/utility";
import Projects from "../Components/Projects";

function ProjectsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`section-projects ${theme}`}>
      <h1 className="section-projects__title baloo-bhaijaan">
        <span>Meus</span> <span className="span-projects">Projetos</span>
      </h1>

      {projects.slice(0, 3).map((project) => {
        const technology = {
          tech: project.technologyUsed,
          style: project.style,
        };

        return (
          <Projects
            key={project.id}
            numberProject={project.numberProject}
            title={project.title}
            description={project.description}
            image={project.image}
            liveDemoUrl={project.liveDemoUrl}
            existLiveDemo={project.existLiveDemo}
            seeOnGithubUrl={project.seeOnGithubUrl}
            invertImage={project.invertImage}
            technology={technology}
          />
        );
      })}
    </section>
  );
}

export default ProjectsPage;
