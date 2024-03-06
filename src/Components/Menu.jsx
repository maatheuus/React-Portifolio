import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import ListButtonsIcons from "./ListButtonsIcons";

import CircleHalf from "./svg/CircleHalf";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";

import MenuHamburguer from "./svg/MenuHamburguer";
import ListNav from "./ListNav";

function Menu() {
  const { theme, isHidden, clickTheme, showMenu } = useContext(ThemeContext);

  const hidden = "hidden";

  return (
    <>
      <menu className="menu">
        <div className="menu__content">
          <ListButtonsIcons
            onClick={showMenu}
            classButton="button"
            icons={<MenuHamburguer className=" menu__hamburguer" />}
          />

          <div className={`menu__list ${theme} ${isHidden && hidden} `}>
            <ListNav className="menu__items" />
            <div className="menu__list-theme">
              <ListButtonsIcons
                text="Dark"
                icons={<Moon className="dark" />}
                classButton="button icons-theme--dark"
                onClick={() => clickTheme("dark")}
              />
              <ListButtonsIcons
                text="Default"
                icons={<CircleHalf className="default" />}
                classButton="button icons-theme--default"
                onClick={() => clickTheme("default")}
              />
              <ListButtonsIcons
                text="Light"
                icons={<Sun className="light" />}
                classButton="button icons-theme--light"
                onClick={() => clickTheme("light")}
              />
            </div>
          </div>
        </div>
      </menu>
    </>
  );
}

export default Menu;
