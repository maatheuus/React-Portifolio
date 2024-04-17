import trillo from "../assents/imagesProjects/hotel-trillo.png";
import weather from "../assents/imagesProjects/weather-app.png";
import ageApp from "../assents/imagesProjects/age-app.png";
import foodApp from "../assents/imagesProjects/React-food-image.png";
import fastPizza from "../assents/imagesProjects/react-fast-pizza.png";

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
    seeOnGithubUrlUrl:
      "https://github.com/maatheuus/Trillo-Hotel?tab=readme-ov-file",
  },
  {
    id: 2,
    invertImage: true,
    numberProject: "02",
    title: "Weather App",
    description:
      "Esse site foi feito para facilitar quando você quiser saber como anda o clima na sua cidade ou em qualquer cidade do mundo. Com um design minimalista e agradável você se encontra fácil no site. (informações em inglês, até o momento)",
    image: weather,
    liveDemoUrl: "https://maatheuus.github.io/WeatherApp/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/WeatherApp",
  },
  {
    id: 3,
    invertImage: false,
    numberProject: "03",
    title: "Calc Age App",
    description:
      "Esse foi meu primero projeto com Vanilla JavaScript, HTML5 e CSS. Esse projeto foi um desafio Frontend mentor, o que foi um desafio para o primeiro projeto.",
    image: ageApp,
    liveDemoUrl: "https://maatheuus.github.io/calculator-app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/calculator-app",
  },
  {
    id: 4,
    invertImage: true,
    numberProject: "04",
    title: "ReactFood",
    description:
      "ReactFood é um site aonde você pode escolher dentre diversas opções de comidas com um layout amigável e um formulário para inserir seus dados e fazer o pedido. Para mais detalhes de como iniciar, veja no github.",
    image: foodApp,
    existLiveDemo: false,
    seeOnGithubUrl: "https://github.com/maatheuus/ReactFood",
  },
  {
    id: 5,
    invertImage: false,
    numberProject: "05",
    title: "Fast React Pizza",
    description:
      "Fast Pizza é um site de estudo onde você pode escolher dentre diversas opções de pizzas com um layout amigável e um formulário para pegar seu endereço automaticamente (caso você permita) e seu número de celular.",
    image: fastPizza,
    liveDemoUrl: "https://react-fastpizza.netlify.app/",
    existLiveDemo: true,
    seeOnGithubUrl: "https://github.com/maatheuus/Fast-React-Pizza",
  },
];
