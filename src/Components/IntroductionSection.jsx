import { FaLinkedin, FaGithub } from "react-icons/fa";
import Button from "./Button";
import ArrowLink from "../Components/svg/ArrowLink";

export default function IntroductionSection() {
  return (
    <section className="section-top">
      <div className="content-section">
        <div className="content-section__introduction">
          <h1 className="content-section__introduction-title">
            <span className="span-hi">Hi, I am </span>
            <span className="span-name">Maat Bakari</span>
          </h1>
          <p className="content-section__introduction-text">
            Front-end developer passionate building accessible and user friendli
            websites.
          </p>
          <div className="section-list">
            <ul className="section-list__buttons">
              <li>
                <Button className="button section-list__buttons--contact">
                  <span>Contact me</span>
                  <div className="arrow">
                    <ArrowLink className="arrow-link" />
                  </div>
                </Button>
              </li>
              <li>
                <Button className="button section-list__buttons--linkedin">
                  {" "}
                  <FaLinkedin />
                </Button>
              </li>
              <li>
                <Button className="button section-list__buttons--gitHub">
                  {" "}
                  <FaGithub />
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-section__profile">PROFILE</div>
      </div>
    </section>
  );
}
