import Button from "./Button";

import CircleHalf from "./svg/CircleHalf";
import Translate from "./svg/Translate";
import Sun from "./svg/Sun";
import Moon from "./svg/Moon";

export default function ListNav() {
  const nameHeader = "<Matheus />";

  return (
    <div className="nav__list">
      <h1 className="header__title ">{nameHeader}</h1>

      <div>
        <ul className="nav__list-buttons ">
          <li>
            <Button className="nav__list-buttons button">About me</Button>
          </li>
          <li>
            <Button className="nav__list-buttons button">Skills</Button>
          </li>
          <li>
            <Button className="nav__list-buttons button">Projects</Button>
          </li>
          <li>
            <Button className="nav__list-buttons button">Contact Me</Button>
          </li>
        </ul>
      </div>
      <div>
        <ul className="nav__list-icons">
          <li>
            <Button className="nav__list-icons button">
              {" "}
              <Translate className="svg" />
            </Button>
          </li>
          <li>
            <Button className="nav__list-icons--theme button">
              {" "}
              <CircleHalf className="svg circle-half" />
              <div className="icons-theme">
                <Moon />
                <Sun />
              </div>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
