import ArrowLink from "./svg/ArrowLink";
import { FaGithub } from "react-icons/fa";

function Projects({ invertImage }) {
  let projects = "projects";

  if (invertImage) {
    projects += " invert-direction";
  }

  return (
    <>
      <div className={projects}>
        <div className="projects__image"></div>

        <div className="projects__content">
          <div className="projects-description">
            <h2 className="projects-description__title--number">01</h2>
            <h3 className="projects-description__title--project">
              Teste De Projeto
            </h3>
            <p className="projects-description__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ad
              omnis dignissimos sit enim mollitia vitae odio, consequatur
              laborum laudantium. Asperiores laboriosam libero nihil cum minima
              atque ut ea expedita! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Libero dolores, dolorum ipsum, tempore quidem
              fuga minus quas incidunt aperiam eos voluptatum, illo ut nostrum
              aspernatur maiores cum repellendus impedit dolorem?
            </p>
          </div>
          <div className="links">
            <ul className="links__list">
              <li>
                <a href="" target="_black" className="links__link link-style">
                  live demo
                  <ArrowLink className="svg" />
                </a>
              </li>
              <li>
                <a href="" target="_black" className="links__link   link-style">
                  See on Github
                  <FaGithub className="svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="projects__image"></div> */}
      </div>
    </>
  );
}

export default Projects;
