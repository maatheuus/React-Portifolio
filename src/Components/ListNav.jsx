import ListButtonsIcons from "./ListButtonsIcons";
import ChangeTheme from "./ChangeTheme";

export default function ListNav() {
  const nameHeader = "<Matheus />";

  return (
    <div className={`nav__list `}>
      <h1 className="header__title ">{nameHeader}</h1>

      <div>
        <ul className="nav__list-buttons ">
          <li>
            <ListButtonsIcons text="About me" />
          </li>
          <li>
            <ListButtonsIcons text="Skills" />
          </li>
          <li>
            <ListButtonsIcons text="Projects" />
          </li>
          <li>
            <ListButtonsIcons text="Contact Me" />
          </li>
        </ul>
      </div>
      <ChangeTheme />
    </div>
  );
}
