import { useContext } from "react";

import ListButtonsIcons from "./ListButtonsIcons";
import ChangeTheme from "./ChangeTheme";

import { ScrollContext } from "../context/scrollPage-button-context";

export default function ListNav() {
  const nameHeader = "<Matheus />";

  const { scrollTo } = useContext(ScrollContext);

  return (
    <div className={`nav__list `}>
      <h1 className="header__title ">{nameHeader}</h1>

      <div>
        <ul className="nav__list-buttons ">
          <li>
            <ListButtonsIcons text="About me" onClick={scrollTo} />
          </li>
          <li>
            <ListButtonsIcons text="Skills" onClick={scrollTo} />
          </li>
          <li>
            <ListButtonsIcons text="Projects" onClick={scrollTo} />
          </li>
          <li>
            <ListButtonsIcons text="Contact Me" onClick={scrollTo} />
          </li>
        </ul>
      </div>
      <ChangeTheme />
    </div>
  );
}
