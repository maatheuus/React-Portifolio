import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`section-about ${theme}`}>
      <div className="about">
        <div className="about__image"></div>

        <div className="about__content">
          <h1 className="about__title">
            <span>About</span> <span className="span-me">Me</span>
          </h1>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorem beatae molestiae eveniet dolores laudantium veritatis
            excepturi velit voluptas, placeat ipsam expedita exercitationem
            quibusdam omnis voluptate, fuga necessitatibus, dicta adipisci.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            ratione repellat nobis esse animi quas ea autem ullam soluta, cum
            consectetur perspiciatis aut aliquam. Excepturi accusantium
            repudiandae pariatur veritatis doloremque?
          </p>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorem beatae molestiae eveniet dolores laudantium veritatis
            excepturi velit voluptas, placeat ipsam expedita exercitationem
            quibusdam omnis voluptate, fuga necessitatibus, dicta adipisci.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            ratione repellat nobis esse animi quas ea autem ullam soluta, cum
            consectetur perspiciatis aut aliquam. Excepturi accusantium
            repudiandae pariatur veritatis doloremque?
          </p>
          <p className="about__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorem beatae molestiae eveniet dolores laudantium veritatis
            excepturi velit voluptas, placeat ipsam expedita exercitationem
            quibusdam omnis voluptate, fuga necessitatibus, dicta adipisci.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            ratione repellat nobis esse animi quas ea autem ullam soluta, cum
            consectetur perspiciatis aut aliquam. Excepturi accusantium
            repudiandae pariatur veritatis doloremque?
          </p>
        </div>
      </div>
    </section>
  );
}
