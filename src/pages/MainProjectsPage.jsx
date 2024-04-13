import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/color-theme-context";

import Projects from "../Components/Projects";

import ageApp from "../assents/imagesProjects/age-app.png";
import ProjectsPage from "./ProjectsPage";

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
      <ProjectsPage />

      <Projects
        numberOfProject="03"
        title="Calc Age App (Caso de estudo)"
        description="Esse foi meu primero projeto com Vanilla JavaScript, HTML5 e CSS. Esse projeto foi um desafio Frontend mentor, o que foi um desafio para o primeiro projeto."
        images={ageApp}
        liveDemo="https://maatheuus.github.io/calculator-app/"
        seeOnGithub="https://github.com/maatheuus/calculator-app"
      />
    </motion.section>
  );
}

export default MainProjectsPage;
