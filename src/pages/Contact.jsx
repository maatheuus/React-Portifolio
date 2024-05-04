import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/color-theme-context";

import Input from "../Components/Input";
import Button from "../Components/Button";

function ContactPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <section className={`section-contact ${theme} `}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 60 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.8, bounce: 0, type: "spring" },
            },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="section-contact__content"
        >
          <div className="content-form">
            <form
              action="https://formsubmit.co/matts14smkd@gmail.com"
              method="POST"
              className="form"
            >
              <Input
                name="name"
                type="text"
                autoComplete="on"
                placeholder="Seu nome"
              />

              <Input
                name="email"
                type="email"
                autoComplete="on"
                placeholder="Email"
              />

              <Input
                type="textarea"
                name="description"
                autoComplete="on"
                placeholder="Como posso ajudar?"
              />
              <div className="btn-submit">
                <Button
                  className="btn-submit__button noticia-text-regular"
                  type="submit"
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
        </motion.div>
      </section>
    </>
  );
}

export default ContactPage;
