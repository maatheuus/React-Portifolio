import { createContext, useReducer } from "react";
import CircleHalf from "../Components/svg/CircleHalf";
import Sun from "../Components/svg/Sun";
import Moon from "../Components/svg/Moon";

function themeColorDispatch(state, action) {
  if (action.type === "THEME_COLOR") {
    if (action.color === "dark") {
      return {
        theme: "dark-mode",
        isHidden: !state.isHidden,
        iconTheme: <Moon className="dark dark-icon" />,
      };
    }

    if (action.color === "default") {
      return {
        theme: "default",
        isHidden: !state.isHidden,
        iconTheme: <CircleHalf className="svg" />,
      };
    }
    if (action.color === "light") {
      return {
        theme: "light-mode",
        isHidden: !state.isHidden,
        iconTheme: <Sun className="light" />,
      };
    }
  }

  if (action.type === "HIDDEN_THEME") {
    return {
      theme: state.theme,
      isHidden: !state.isHidden,
      iconTheme: state.iconTheme,
    };
  }
  if (action.type === "SHOW_MENU") {
    return {
      theme: state.theme,
      isHidden: !state.isHidden,
    };
  }

  return state;
}

export const ThemeContext = createContext({
  theme: "",
  iconTheme: "",
  isHidden: Boolean,
  clickTheme: () => {},
  hiddenTheme: () => {},
  showMenu: () => {},
});

export default function ColorThemeContext({ children }) {
  const [state, dispatch] = useReducer(themeColorDispatch, {
    theme: "",
    isHidden: Boolean,
    iconTheme: <CircleHalf className="svg" />,
  });

  function handleHiddenThemes() {
    dispatch({
      type: "HIDDEN_THEME",
      isHidden: false,
    });
  }

  function handleClickThemes(colorClick) {
    dispatch({
      type: "THEME_COLOR",
      color: colorClick,
      iconTheme: "",
    });
  }

  function handleShowMenu() {
    dispatch({
      type: "SHOW_MENU",
      isHidden: false,
    });
  }

  const ctxValue = {
    theme: state.theme + " transition-background",
    isHidden: state.isHidden,
    iconTheme: state.iconTheme,
    clickTheme: handleClickThemes,
    hiddenTheme: handleHiddenThemes,
    showMenu: handleShowMenu,
  };
  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
