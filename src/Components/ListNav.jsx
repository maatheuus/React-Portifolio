import { FaLanguage, FaMoon } from "react-icons/fa";

import Language from "./svg/Language";
import MoonDark from "./svg/MoonDark";
// import MoonLight from "./svg/MoonLight";

export default function ListNav() {
  return (
    <>
      <div>
        <li>
          <button>About me</button>
        </li>
        <li>
          <button>Skills</button>
        </li>
        <li>
          <button>Projects</button>
        </li>
        <li>
          <button>Contact Me</button>
        </li>
      </div>
      <div>
        <FaMoon style={{ height: "50px", width: "50px" }} />
        <FaLanguage style={{ height: "50px", width: "50px" }} />
        <Language />
        <MoonDark />
      </div>
    </>
  );
}
