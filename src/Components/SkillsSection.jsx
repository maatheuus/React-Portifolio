import { FaJs, FaReact, FaSass, FaHtml5, FaCss3 } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section className="section-skills">
      <div className="section-content">
        <h1 className="section-content__title">
          <span>My</span> <span className="span-projects">Skills</span>
        </h1>

        <div className="content-skills">
          <div className="content-skills__skill">
            <FaJs className="svg" />
            <h2 className="content-skills__skill--title">JavaScript</h2>
          </div>
          <div className="content-skills__skill">
            <FaReact className="svg" />
            <h2 className="content-skills__skill--title">React</h2>
          </div>
          <div className="content-skills__skill">
            <FaHtml5 className="svg" />
            <h2 className="content-skills__skill--title">Html5</h2>
          </div>
          <div className="content-skills__skill">
            <FaCss3 className="svg" />
            <h2 className="content-skills__skill--title">Css3</h2>
          </div>
          <div className="content-skills__skill">
            <FaSass className="svg" />
            <h2 className="content-skills__skill--title">Sass/Scss</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
