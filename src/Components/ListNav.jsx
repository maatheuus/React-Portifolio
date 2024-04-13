import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "../context/color-theme-context";
import ListButtonsIcons from "./ListButtonsIcons";

export default function ListNav({ titleHeader, className, children, inMenu }) {
  const { hiddenTheme } = useContext(ThemeContext);

  return (
    <div className={className}>
      {titleHeader}

      <ul className="nav__list-buttons">
        <li>
          <NavLink to=".." className="link-style">
            {inMenu ? (
              <ListButtonsIcons
                onClick={hiddenTheme}
                text="Home"
                classButton="button nav__list-buttons"
              />
            ) : (
              <ListButtonsIcons
                text="Home"
                classButton="button nav__list-buttons"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="about" className="link-style">
            {inMenu ? (
              <ListButtonsIcons
                onClick={hiddenTheme}
                text="Sobre"
                classButton="button nav__list-buttons"
              />
            ) : (
              <ListButtonsIcons
                text="Sobre"
                classButton="button nav__list-buttons"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="skills" className="link-style">
            {inMenu ? (
              <ListButtonsIcons
                onClick={hiddenTheme}
                text="Skills"
                classButton="button nav__list-buttons"
              />
            ) : (
              <ListButtonsIcons
                text="Skills"
                classButton="button nav__list-buttons"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="projects" className="link-style">
            {inMenu ? (
              <ListButtonsIcons
                onClick={hiddenTheme}
                text="Projetos"
                classButton="button nav__list-buttons"
              />
            ) : (
              <ListButtonsIcons
                text="Projetos"
                classButton="button nav__list-buttons"
              />
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className="link-style">
            {inMenu ? (
              <ListButtonsIcons
                onClick={hiddenTheme}
                text="Contato"
                classButton="button nav__list-buttons"
              />
            ) : (
              <ListButtonsIcons
                text="Contato"
                classButton="button nav__list-buttons"
              />
            )}
          </NavLink>
        </li>
      </ul>

      {children}
    </div>
  );
}
