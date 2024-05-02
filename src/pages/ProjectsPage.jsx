import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import Projects from "../Components/Projects";

import trillo from "../assents/imagesProjects/hotel-trillo.png";
import fastPizza from "../assents/imagesProjects/react-fast-pizza.png";
import vacationPlans from "../assents/imagesProjects/vacation-plan.png";

function ProjectsPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`section-projects ${theme}`}>
      <h1 className="section-projects__title baloo-bhaijaan">
        <span>Meus</span> <span className="span-projects">Projetos</span>
      </h1>
      <Projects
        numberProject="01"
        existLiveDemo
        title="Trillo Hotel"
        description="Este site foi feito para facilitar a busca por hotéis, proporcionando uma experiência intuitiva aos usuários. Nele é possível pesquisar a cidade que deseja do Brasil e escolher qualquer hotel disponível para aquela região e salvar para mais tarde caso queria pesquisar o hotel depois."
        image={trillo}
        liveDemoUrl="https://hotelstrillo.netlify.app/"
        seeOnGithubUrl="https://github.com/maatheuus/Trillo-Hotel?tab=readme-ov-file"
      />
      <Projects
        title="Vacation Plans"
        numberProject="02"
        invertImage
        existLiveDemo
        description="Vacation Plans foi criado para suprir a necessidade de gerenciar as férias dos seus funcionários. Com autenticação, formulários, real-time data essa aplicação supre boa parte da sua necessidade."
        image={vacationPlans}
        liveDemoUrl="https://vactions-plan.vercel.app/"
        seeOnGithubUrl="https://github.com/maatheuus/VactionPlan"
      />
      <Projects
        numberProject="03"
        existLiveDemo
        title="React Fast App"
        description="Projeto realizado para suprir as necessidade dos clientes em obter uma aplicação com fácil visualização e instruções."
        image={fastPizza}
        liveDemoUrl="https://react-fastpizza.netlify.app/"
        seeOnGithubUrl="https://github.com/maatheuus/Fast-React-Pizza"
      />
    </section>
  );
}

export default ProjectsPage;
