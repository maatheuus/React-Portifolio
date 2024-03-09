import { useContext } from "react";
import { ThemeContext } from "../../context/color-theme-context";

import { FaLinkedin, FaGithub } from "react-icons/fa";

import ArrowLink from "../svg/ArrowLink";
import LinksIntroduction from "../LinksIntroduction";
import ListButtonsIcons from "../ListButtonsIcons";

export default function IntroductionSection() {
  const { theme } = useContext(ThemeContext);

  return (
    <section className={`section-top ${theme}`}>
      <div className="content-section">
        <div className="content-section__introduction">
          <h1 className="content-section__introduction-title numans-regular">
            <span className="span-hi">Hi, Eu sou o </span>
            <span>Matheus.</span>
          </h1>
          <p className="content-section__introduction-text numans-regular">
            Desenvolvedor <strong>front-end </strong>apaixonado por construir
            sites acessíveis e fáceis de usar.
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
            <img
              src="src\assents\imagesProfile\photo-profile.jpg"
              alt="photo of the user"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
