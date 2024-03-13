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
              <Input type="text" autoComplete="on" placeholder="Seu nome" />

              <Input type="email" autoComplete="on" placeholder="Email" />

              <Input
                type="textarea"
                autoComplete="on"
                placeholder="Como posso ajudar?"
              />
              <div className="btn-submit">
                <Button
                  className="btn-submit__button noticia-text-regular"
                  type="submit"
                  required
                >
                  Enviar
                </Button>
                <Input type="hidden" name="_captcha" value="false" />
              </div>
            </form>
          </div>
          <div className="information">
            <h1 className="information__title baloo-bhaijaan ">
              Vamos <span className="span-talk">conversar</span> para{" "}
              <span className="span-line">Algo especial</span>
            </h1>
            <p className="information__email baloo-bhaijaan ">
              matts14smkd@gmail.com
            </p>

            <footer className="footer ">
              <p className="baloo-bhaijaan ">@2024 Matheus</p>
              <p>&copy; All the right reserved</p>
            </footer>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
