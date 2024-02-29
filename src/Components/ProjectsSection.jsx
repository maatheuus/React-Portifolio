import Projects from "./Projects";

function ProjectsSection() {
  return (
    <section className="section-projects">
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
