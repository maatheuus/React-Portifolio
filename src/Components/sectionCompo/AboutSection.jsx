import { useContext } from "react";
import { ThemeContext } from "../../context/color-theme-context";

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
            Para chegar até a jornada de estudante de Desenvolvimento Web Front
            End eu preciso dizer que aqui nunca tive tempo ruim e sempre
            trabalhei, fiz de tudo um pouco. Meu primeiro trabalho foi em uma
            lavadora, depois trabalhei como empacotador, realizei um estágio em
            uma biblioteca e agora estou como Operador Industrial Como sou um
            entusiasta da tecnologia, procurei me desenvolver nessa área e agora
            busco estudar fundamentos de metodologias ágeis, adaptabilidade e
            com isso, consigo ter uma visão mais analítica, um pensamento
            estratégico e um trabalho voltado para resultados de alta
            performance. Com as experiências que eu possuo, tenho um senso de
            organização e urgência muito bom, sei que é uma característica
            essencial para manter um time performando e produzindo em conjunto.
            A procura da primeira oportunidade no mercado tech, estou buscando
            oportunidades de desenvolvedor jr e espero que me conhecendo até
            aqui, eu possa ter despertado seu interesse por um papo.
          </p>
          <p className="about__text">
            Você pode me contratar se deseja:
            <ul>
              <li>Um profissional dedicado</li>
              <li>Um profissional com senso de urgência.</li>
              <li>Um profissional com senso de coletividade.</li>

              <li>
                Um profissional estudioso e atento às tendências de mercado.
              </li>

              <li>Um profissional voltado para resultados.</li>
              <li>
                Um profissional que vai colaborar para o sucesso e crescimento
                da sua empresa!
              </li>
            </ul>
          </p>
        </div>
      </div>
    </section>
  );
}
