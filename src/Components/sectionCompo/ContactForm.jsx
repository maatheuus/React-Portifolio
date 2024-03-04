import { useContext } from "react";
import { ThemeContext } from "../../context/color-theme-context";

import Input from "../Input";
import Button from "../Button";

function ContactForm() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={`section-contact ${theme} `}>
        <div className="section-contact__content">
          <div className="content-form">
            <form
              action="https://formsubmit.co/matts14smkd@gmail.com"
              method="POST"
              className="form"
            >
              <Input type="text" autoComplete="on" placeholder="Your name" />

              <Input type="email" autoComplete="on" placeholder="Email" />

              <Input
                type="textarea"
                autoComplete="on"
                placeholder="How can I help?"
              />
              <div className="btn-submit">
                <Button className="btn-submit__button" type="submit" required>
                  Get in Touch
                </Button>
                <Input type="hidden" name="_captcha" value="false" />
              </div>
            </form>
          </div>
          <div className="information">
            <h1 className="information__title">
              Let&apos;s <span className="span-talk">talk</span> for{" "}
              <span className="span-line">Something special</span>
            </h1>
            <p className="information__email">matts14smkd@gmail.com</p>

            <footer className="footer">
              <p>@2024 Matheus</p>
              <p>&copy; All the right reserved</p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
