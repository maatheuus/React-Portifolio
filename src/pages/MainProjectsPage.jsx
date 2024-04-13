import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/color-theme-context";

import { projects } from "../util/utility.js";
import Projects from "../Components/Projects";

function MainProjectsPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.7 },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`section-projects ${theme}`}
    >
      {projects.map((project) => {
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
          />
        );
      })}
    </motion.section>
  );
}

export default MainProjectsPage;
