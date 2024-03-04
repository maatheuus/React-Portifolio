import { useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import ListButtonsIcons from "./ListButtonsIcons";

import CircleHalf from "./svg/CircleHalf";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";

function ButtonsTeste() {
  const { iconTheme, isHidden, clickTheme, hiddenTheme } =
    useContext(ThemeContext);

  const hidden = " hidden";
  let classIconsTheme = "icons-theme nav__list-icons--theme";

  return (
    <div>
      <ul className="nav__list-icons ">
        <li>
          <ListButtonsIcons
            icons={iconTheme}
            onClick={hiddenTheme}
            classButton="button"
          />
        </li>

        <li>
          <div
            className={isHidden ? classIconsTheme + hidden : classIconsTheme}
          >
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
        </li>
      </ul>
    </div>
  );
}

export default ButtonsTeste;
