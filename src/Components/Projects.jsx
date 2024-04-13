import { motion } from "framer-motion";
import ArrowLink from "./svg/ArrowLink";
import { FaGithub } from "react-icons/fa";

function Projects(props) {
  const {
    invertImage,
    numberProject,
    title,
    description,
    image,
    liveDemoUrl,
    existLiveDemo,
    seeOnGithubUrl,
  } = props;

  let projects = "projects";

  if (invertImage) {
    projects += " invert-direction";
  }

  return (
    <>
      <motion.div
        className={projects}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.9, bounce: 0, type: "spring" },
          },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="projects__images">
          <img src={image} alt="image of this project" />
        </div>

        <div className="projects__content">
          <div className="projects-description">
            <h2 className="projects-description__title--number baloo-bhaijaan ">
              {numberProject}
            </h2>
            <h3 className="projects-description__title--project baloo-bhaijaan ">
              {title}
            </h3>
            <p className="projects-description__text noticia-text-regular">
              {description}
            </p>
          </div>
          <div className="links">
            <ul className="links__list">
              {existLiveDemo && (
                <li>
                  <a
                    href={liveDemoUrl}
                    target="_black"
                    className="links__link link-style numans-regular"
                  >
                    Live demo
                    <ArrowLink className="svg" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={seeOnGithubUrl}
                  target="_black"
                  className="links__link link-style numans-regular"
                >
                  See on Github
                  <FaGithub className="svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Projects;
