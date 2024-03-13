import { useContext } from "react";
import { ThemeContext } from "../../context/color-theme-context";

import imageBasket from "../../../public/profile-basket.jpg";

export default function AboutSection() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`section-about ${theme}`}>
      <div className="about">
        <div className="about__profile">
          <div className="about__profile--image">
            <img src={imageBasket} alt="photo of the user" />
          </div>
        </div>

        <div className="about__content">
          <h1 className="about__title numans-regular">
            <span>Sobre</span> <span className="span-me">Mim</span>
          </h1>
          <p className="about__text noticia-text-regular">
            Para chegar até a jornada de estudante de Desenvolvimento Web Front
            End eu preciso dizer que aqui nunca tive tempo ruim e sempre
            trabalhei, fiz de tudo um pouco. Meu primeiro trabalho foi em uma
            lavadora, depois trabalhei como empacotador, realizei um estágio em
            uma biblioteca e agora estou como Operador Industrial. Como sou um
            entusiasta da tecnologia, procurei me desenvolver nessa área e agora
            busco estudar
            <strong>
              {" "}
              <u>fundamentos de metodologias ágeis</u>
            </strong>
            ,{" "}
            <strong>
              <u>adaptabilidade</u>
            </strong>{" "}
            e com isso, consigo ter uma visão mais analítica, um pensamento
            estratégico e{" "}
            <strong>
              <u> um trabalho voltado para resultados de alta performance</u>
            </strong>
            . Com as{" "}
            <strong>
              <u>experiências</u>
            </strong>{" "}
            que eu possuo, tenho um senso de{" "}
            <strong>
              <u>organização</u>
            </strong>{" "}
            e urgência muito bom, sei que é uma característica essencial para
            manter um time performando e produzindo em conjunto. A procura da
            primeira oportunidade no mercado tech, estou buscando oportunidades
            de desenvolvedor jr e espero que me conhecendo até aqui, eu possa
            ter despertado seu interesse por um papo. Nas horas vagas sou um
            amante apaixonado do basquete e vários outros esportes que envolvam
            se mexer ativamente :).
          </p>
        </div>
      </div>
    </section>
  );
}
