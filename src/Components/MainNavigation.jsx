import { useContext } from "react";
import { motion } from "framer-motion";

import { ThemeContext } from "../context/color-theme-context";

import ListNav from "./ListNav";

import ChangeTheme from "./ChangeTheme";
import Menu from "./Menu";

function MainNavigation() {
  const { theme } = useContext(ThemeContext);
  const nameHeader = "<Matheus />";

  return (
    <motion.header
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { delay: 0.6 },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`header ${theme}`}
    >
      <Menu />
      <div className="header__content">
        <nav className="nav">
          <ListNav
            className="nav__list"
            inMenu={false}
            titleHeader={<h1 className="header__title">{nameHeader}</h1>}
          >
            <ChangeTheme />
          </ListNav>
        </nav>
      </div>
    </motion.header>
  );
}

export default MainNavigation;
