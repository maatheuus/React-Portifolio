import trillo from "../assents/imagesProjects/hotel-trillo.png";
import weather from "../assents/imagesProjects/weather-app.png";
import foodApp from "../assents/imagesProjects/React-food-image.png";
import fastPizza from "../assents/imagesProjects/react-fast-pizza.png";
import vacationPlans from "../assents/imagesProjects/vacation-plan.png";

export const projects = [
  {
    id: 1,
    invertImage: false,
    numberProject: "01",
    title: "Trillo Hotel",
    description:
      "Este site foi feito para facilitar a busca por hotéis, proporcionando uma experiência intuitiva aos usuários. Nele é possível pesquisar a cidade que deseja do Brasil e escolher qualquer hotel disponível para aquela região e salvar para mais tarde caso queria pesquisar o hotel depois.",
    image: trillo,
    liveDemoUrl: "https://hotelstrillo.netlify.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/Trillo-Hotel",
    technologyUsed: "JavaScript",
    style: "Sass",
  },
  {
    id: 2,
    invertImage: true,
    numberProject: "02",
    title: "Vacation Plans",
    description:
      "Vacation Plans foi criado para suprir a necessidade de gerenciar as férias dos seus funcionários. Com autenticação, formulários, real-time data essa aplicação supre boa parte da sua necessidade.",
    image: vacationPlans,
    liveDemoUrl: "https://vactions-plan.vercel.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/VactionPlan",
    technologyUsed: "React",
    style: "Sass",
  },
  {
    id: 3,
    invertImage: false,
    numberProject: "03",
    title: "Weather App",
    description:
      "Esse site foi feito para facilitar quando você quiser saber como anda o clima na sua cidade ou em qualquer cidade do mundo. Com um design minimalista e agradável você se encontra fácil no site. (informações em inglês, até o momento)",
    image: weather,
    liveDemoUrl: "https://maatheuus.github.io/WeatherApp/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/WeatherApp",
    technologyUsed: "JavaScript",
    style: "Css",
  },
  {
    id: 4,
    invertImage: false,
    numberProject: "04",
    title: "ReactFood",
    description:
      "ReactFood é um site aonde você pode escolher dentre diversas opções de comidas com um layout amigável e um formulário para inserir seus dados e fazer o pedido. Para mais detalhes de como iniciar, veja no github.",
    image: foodApp,
    existLiveDemo: false,
    seeOnGithubUrl: "https://github.com/maatheuus/ReactFood",
    technologyUsed: "React",
    style: "Css",
  },
  {
    id: 5,
    invertImage: true,
    numberProject: "05",
    title: "Fast React Pizza",
    description:
      "Fast Pizza é um site de estudo onde você pode escolher dentre diversas opções de pizzas com um layout amigável e um formulário para pegar seu endereço automaticamente (caso você permita) e seu número de celular.",
    image: fastPizza,
    liveDemoUrl: "https://react-fastpizza.netlify.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/Fast-React-Pizza",
    technologyUsed: "React",
    style: "Tailwind",
  },
];
