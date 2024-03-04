import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import ListNav from "./ListNav";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`header ${theme}`}>
      <div className="header__content">
        <nav className="nav">
          <ListNav />
        </nav>
      </div>
    </header>
  );
}
