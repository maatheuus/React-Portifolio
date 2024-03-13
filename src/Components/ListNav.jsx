import ListButtonsIcons from "./ListButtonsIcons";

import handleClickTop from "../scrollInterview";

export default function ListNav({ titleHeader, className, children }) {
  return (
    <div className={className}>
      {titleHeader}

      <ul className="nav__list-buttons ">
        <li>
          <ListButtonsIcons
            text="Sobre"
            onClick={() => handleClickTop("section-about")}
            classButton="button nav__list-buttons"
          />
        </li>
        <li>
          <ListButtonsIcons
            text="Skills"
            onClick={() => handleClickTop("section-skills")}
            classButton="button nav__list-buttons"
          />
        </li>
        <li>
          <ListButtonsIcons
            text="Projetos"
            onClick={() => handleClickTop("section-projects")}
            classButton="button nav__list-buttons"
          />
        </li>
        <li>
          <ListButtonsIcons
            text="Contato"
            onClick={() => handleClickTop("section-contact")}
            classButton="button nav__list-buttons"
          />
        </li>
      </ul>
      {children}
    </div>
  );
}
