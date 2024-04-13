import { useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ThemeContext } from "../context/color-theme-context";

import ArrowLink from "../Components/svg/ArrowLink";
import LinksIntroduction from "../Components/LinksIntroduction";
import ListButtonsIcons from "../Components/ListButtonsIcons";
import imageProfile from "../assents/imagesProfile/photo-profile.jpg";
import ProjectsPage from "./ProjectsPage";

export default function HomePage() {
  const { theme } = useContext(ThemeContext);
  const { scrollY } = useScroll();
  const width = window.innerWidth;

  let pxRangeTopY = [0, 350, 430, 600];
  let opacityRangeTopY = [1, 0.5, 0.5, 0];

  let pxRangeBottomY = [0, 600, 650];
  let opacityRangeBottomY = [0, 0.5, 1];

  if (width < 800) {
    pxRangeTopY = [0, 500, 700];
    opacityRangeTopY = [1, 0.5, 0];

    pxRangeBottomY = [0, 600, 700, 800];
    opacityRangeBottomY = [0, 0.2, 0.5, 1];
  }

  if (width < 500) {
    pxRangeTopY = [0, 700, 900];
    opacityRangeTopY = [1, 0.5, 0];

    pxRangeBottomY = [0, 700, 750, 900];
    opacityRangeBottomY = [0, 0.2, 0.5, 1];
  }

  const opacityTop = useTransform(scrollY, pxRangeTopY, opacityRangeTopY);
  const opacityBottom = useTransform(
    scrollY,
    pxRangeBottomY,
    opacityRangeBottomY
  );

  return (
    <>
      <section className={`section-top ${theme}`}>
        <motion.div
          style={{ opacity: opacityTop }}
          className="content-section"
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, bounce: 0 },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="content-section__introduction">
            <h1 className="content-section__introduction-title numans-regular">
              <span className="span-hi">Hey, Eu sou o </span>
              <span>Matheus.</span>
            </h1>
            <p className="content-section__introduction-text numans-regular">
              Desenvolvedor <strong>front-end </strong>apaixonado por construir
              sites e outras coisinhas.
            </p>
            <div className="section-list">
              <ul className="section-list__buttons">
                <LinksIntroduction href="mailto:matts14smkd@gmail.com">
                  <ListButtonsIcons
                    icons={<ArrowLink className="arrow-link svg" />}
                    text="Contact me"
                    classDiv="arrow"
                    classButton="button section-list__buttons--contact numans-regular"
                  />
                </LinksIntroduction>

                <LinksIntroduction href="https://www.linkedin.com/in/matheusmaat/">
                  <ListButtonsIcons
                    icons={<FaLinkedin className="svg" />}
                    classButton="button section-list__buttons--linkedin"
                  />
                </LinksIntroduction>
                <LinksIntroduction href="https://github.com/maatheuus">
                  <ListButtonsIcons
                    icons={<FaGithub className="svg" />}
                    classButton="button section-list__buttons--github"
                  />
                </LinksIntroduction>
              </ul>
            </div>
          </div>
          <div className="content-section__profile">
            <div className="content-section__profile--image">
              <img src={imageProfile} alt="photo of the user" />
            </div>
          </div>
        </motion.div>
      </section>
      <motion.div style={{ opacity: opacityBottom }}>
        <ProjectsPage />
      </motion.div>
    </>
  );
}
