import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import Projects from "../Components/Projects";

import trillo from "../assents/imagesProjects/hotel-trillo.png";
import weather from "../assents/imagesProjects/weather-app.png";
import fastPizza from "../assents/imagesProjects/react-fast-pizza.png";

function ProjectsPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`section-projects ${theme}`}>
      <h1 className="section-projects__title baloo-bhaijaan">
        <span>Meus</span> <span className="span-projects">Projetos</span>
      </h1>
      <Projects
        numberProject="01"
        title="Trillo Hotel"
        description="Este site foi feito para facilitar a busca por hotéis, proporcionando uma experiência intuitiva aos usuários. Nele é possível pesquisar a cidade que deseja do Brasil e escolher qualquer hotel disponível para aquela região e salvar para mais tarde caso queria pesquisar o hotel depois."
        image={trillo}
        liveDemo="https://hotelstrillo.netlify.app/"
        seeOnGithub="https://github.com/maatheuus/Trillo-Hotel?tab=readme-ov-file"
      />
      <Projects
        invertImage
        numberProject="02"
        title="Weather App"
        description="Esse site foi feito para facilitar quando você quiser saber como anda o clima na sua cidade ou em qualquer cidade do mundo. Com um design minimalista e agradável você se encontra fácil no site. (informações em inglês, até o momento)"
        image={weather}
        liveDemo="https://maatheuus.github.io/WeatherApp/"
        seeOnGithub="https://github.com/maatheuus/WeatherApp"
      />
      <Projects
        numberProject="03"
        title="React Fast App"
        description="Projeto realizado para suprir as necessidade dos clientes em obter uma aplicação com fácil visualização e instruções."
        image={fastPizza}
        liveDemo="https://react-fastpizza.netlify.app/"
        seeOnGithub="https://github.com/maatheuus/Fast-React-Pizza"
      />
    </section>
  );
}

export default ProjectsPage;
