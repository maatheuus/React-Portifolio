import Button from "./Button";

import { FaLanguage, FaMoon } from "react-icons/fa";

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
              <FaLanguage className="svg" />
            </Button>
          </li>
          <li>
            <Button className="nav__list-icons button">
              {" "}
              <FaMoon
                className="svg"
                style={{ height: "2rem", width: "2rem" }}
              />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
