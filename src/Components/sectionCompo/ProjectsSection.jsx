import { useContext } from "react";
import { ThemeContext } from "../../context/color-theme-context";

import Projects from "../Projects";

import trillo from "../../assents/imagesProjects/hotel-trillo.png";
import weather from "../../assents/imagesProjects/weather-app.png";
import ageApp from "../../assents/imagesProjects/age-app.png";

function ProjectsSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`section-projects ${theme}`}>
      <h1 className="section-projects__title baloo-bhaijaan">
        <span>My</span> <span className="span-projects">Projects</span>
      </h1>
      <Projects
        numberOfProject="01"
        title="Trillo Hotel"
        description="Este site foi feito para facilitar a busca por hotéis, proporcionando uma experiência intuitiva aos usuários. Nele é possível pesquisar a cidade que deseja do Brasil e escolher qualquer hotel disponível para aquela região e salvar para mais tarde caso queria pesquisar o hotel depois."
        images={trillo}
        liveDemo="https://hotelstrillo.netlify.app/"
        seeOnGithub="https://github.com/maatheuus/Trillo-Hotel?tab=readme-ov-file"
      />
      <Projects
        invertImage={true}
        numberOfProject="02"
        title="Weather App"
        description="Esse site foi feito para facilitar quando você quiser saber como anda o clima na sua cidade ou em qualquer cidade do mundo. Com um design minimalista e agradável você se encontra fácil no site. (informações em inglês, até o momento)"
        images={weather}
        liveDemo="https://maatheuus.github.io/WeatherApp/"
        seeOnGithub="https://github.com/maatheuus/WeatherApp"
      />
      <Projects
        numberOfProject="03"
        title="Calc Age App (Caso de estudo)"
        description="Esse foi meu primero projeto com Vanilla JavaScript, HTML5 e CSS. Esse projeto foi um desafio Frontend mentor, o que foi um desafio para o primeiro projeto."
        images={ageApp}
        liveDemo="https://maatheuus.github.io/calculator-app/"
        seeOnGithub="https://github.com/maatheuus/calculator-app"
      />
    </section>
  );
}

export default ProjectsSection;
