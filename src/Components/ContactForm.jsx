import Input from "./Input";
import Button from "./Button";

function ContactForm() {
  return (
    <>
      <section className="section-contact">
        <div className="content-form">
          <form
            action="https://formsubmit.co/matts14smkd@gmail.com"
            method="POST"
            className="form"
          >
            <Input
              type="text"
              autoComplete="on"
              placeholder="Your name"
              name="name"
            />

            <Input
              type="email"
              autoComplete="on"
              placeholder="Email"
              name="email"
            />

            <Input
              type="textarea"
              autoComplete="on"
              placeholder="How can I help?"
            />

            <div className="btn-submit">
              <Button type="submit" required>
                Get in Touch
              </Button>
              <Input type="hidden" name="_captcha" value="false" />
              <Input
                type="hidden"
                name="_next "
                value="https://matheusportifolio.netlify.app/thanks.html"
              />
            </div>
          </form>
        </div>
        <div className="content-information">
          <h1 className="information__title">
            Let&apos;s <span className="span-talk">talk</span> for{" "}
            <span className="span-line">Something special</span>
          </h1>
          <p className="information-email">matts14smkd@gmail.com</p>
        </div>
      </section>

      <footer className="footer">
        <p>@2024 Matheus</p>
        <p>&copy; All the right reserved</p>
      </footer>
    </>
  );
}

export default ContactForm;
