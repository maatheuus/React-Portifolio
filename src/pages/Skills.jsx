import { useContext } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaSass, FaHtml5, FaCss3 } from "react-icons/fa";

import { ThemeContext } from "../context/color-theme-context";
import ListSkills from "../Components/ListSkills";

export default function SkillsPage() {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6 },
      }}
      exit={{ opacity: 0 }}
      className={`section-skills ${theme}`}
    >
      <div className="section-content ">
        <motion.h1 className="section-content__title baloo-bhaijaan">
          <span>Minhas</span> <span className="span-projects">Skills</span>
        </motion.h1>

        <div className="content-skills">
          <ListSkills icon={<FaJs className="svg" />} title="JavaScript" />
          <ListSkills icon={<FaReact className="svg" />} title="React" />
          <ListSkills icon={<FaHtml5 className="svg" />} title="Html5" />
          <ListSkills icon={<FaCss3 className="svg" />} title="Css3" />
          <ListSkills icon={<FaSass className="svg" />} title="Sass/Scss" />
        </div>
      </div>
    </motion.section>
  );
}
