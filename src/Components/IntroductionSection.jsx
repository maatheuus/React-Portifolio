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
            <span>Maat Bakari.</span>
          </h1>
          <p className="content-section__introduction-text">
            Front-end developer passionate building accessible and user friendly
            websites.
          </p>
          <div className="section-list">
            <ul className="section-list__buttons">
              <li>
                <a
                  href="mailto:matts14smkd@gmail.com"
                  target="_blanc"
                  className="link-style"
                >
                  <Button className="button section-list__buttons--contact">
                    <span>Contact me</span>
                    <div className="arrow">
                      <ArrowLink className="arrow-link" />
                    </div>
                  </Button>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/matheusmaat/"
                  target="_blanc"
                  className="link-style"
                >
                  <Button className="button section-list__buttons--linkedin">
                    {" "}
                    <FaLinkedin className="svg" />
                  </Button>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/maatheuus"
                  target="_blanc"
                  className="link-style"
                >
                  <Button className="button section-list__buttons--github">
                    {" "}
                    <FaGithub className="svg" />
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="content-section__profile">
          <div className="content-section__profile--image">
            {/* <img src="" alt="photo of the user" /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
