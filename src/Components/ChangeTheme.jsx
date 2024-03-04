import { useState, useContext } from "react";
import { ThemeContext } from "../context/color-theme-context";

import ListButtonsIcons from "./ListButtonsIcons";

import CircleHalf from "./svg/CircleHalf";
import Translate from "./svg/Translate";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";

function ButtonsTeste() {
  const { clickTheme } = useContext(ThemeContext);

  const [isHidden, setIsHidden] = useState(true);

  const hidden = " hidden";
  let classIconsTheme = "icons-theme nav__list-icons--theme";

  function handleHiddenThemes() {
    setIsHidden(!isHidden);
  }

  return (
    <div>
      <ul className="nav__list-icons ">
        <li>
          <ListButtonsIcons
            icons={<Translate className="svg" />}
            classButton="button"
          />
        </li>

        <li>
          <ListButtonsIcons
            icons={<CircleHalf className="svg" />}
            onClick={handleHiddenThemes}
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
              text="Normal"
              icons={<CircleHalf className="normal" />}
              classButton="button icons-theme--normal"
              onClick={() => clickTheme("normal")}
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
