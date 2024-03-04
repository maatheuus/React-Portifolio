import { useContext } from "react";
import { ThemeContext } from "../../context/color-theme-context";

import ListSkills from "../ListSkills";

import { FaJs, FaReact, FaSass, FaHtml5, FaCss3 } from "react-icons/fa";

export default function SkillsSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`section-skills ${theme}`}>
      <div className="section-content ">
        <h1 className="section-content__title">
          <span>My</span> <span className="span-projects">Skills</span>
        </h1>

        <div className="content-skills">
          <ListSkills icon={<FaJs className="svg" />} title="JavaScript" />
          <ListSkills icon={<FaReact className="svg" />} title="React" />
          <ListSkills icon={<FaHtml5 className="svg" />} title="Html5" />
          <ListSkills icon={<FaCss3 className="svg" />} title="Css3" />
          <ListSkills icon={<FaSass className="svg" />} title="Sass/Scss" />
        </div>
      </div>
    </section>
  );
}
