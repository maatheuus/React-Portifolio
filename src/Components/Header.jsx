import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import ListNav from "./ListNav";

import ChangeTheme from "./ChangeTheme";
import Menu from "./Menu";

export default function Header() {
  const { theme } = useContext(ThemeContext);
  const nameHeader = "<Matheus />";

  return (
    <header className={`header ${theme}`}>
      <Menu />
      <div className="header__content">
        <nav className="nav">
          <ListNav
            className="nav__list"
            titleHeader={<h1 className="header__title ">{nameHeader}</h1>}
          >
            <ChangeTheme />
          </ListNav>
        </nav>
      </div>
    </header>
  );
}
