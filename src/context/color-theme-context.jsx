import { createContext, useReducer } from "react";

function themeColorDispatch(state, action) {
  if (action.color === "dark") {
    // const colorState = {
    //   theme: "dark-mode"
    // }
    return {
      theme: "dark-mode",
    };
  }
  if (action.color === "normal") {
    return {
      theme: "default",
    };
  }
  if (action.color === "light") {
    return {
      theme: "light-mode",
    };
  }

  return state;
}

export const ThemeContext = createContext({
  theme: "",
  clickTheme: () => {},
});

export default function ColorThemeContext({ children }) {
  const [state, dispatch] = useReducer(themeColorDispatch, {
    theme: "",
  });

  function handleClickThemes(colorClick) {
    dispatch({
      type: "THEME_COLOR",
      color: colorClick,
    });
  }

  const ctxValue = {
    theme: state.theme,
    clickTheme: handleClickThemes,
  };
  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
