import { createContext, useReducer } from "react";

function handleClickPage(sectionName) {
  const header = document.querySelector(`.${sectionName}`);

  header.scrollIntoView({
    behavior: "smooth",
  });
}

function scrollToPage(state, action) {
  if (action.page === "About me") {
    handleClickPage("section-about");
    return {
      page: action.page,
    };
  }

  if (action.page === "Skills") {
    handleClickPage("section-skills ");
  }

  if (action.page === "Projects") {
    handleClickPage("section-projects ");
  }

  if (action.page === "Contact Me") {
    handleClickPage("section-contact");
  }

  return state;
}

export const ScrollContext = createContext({
  pageName: "",
  scrollTo: () => {},
  scrollToTop: () => {},
});

export default function ScrollPageContext({ children }) {
  const [state, dispatch] = useReducer(scrollToPage, {
    page: "",
  });

  function handleScrollToPage(element) {
    const pageName = element.target.textContent;

    dispatch({
      type: "SCROLL_PAGE",
      page: pageName,
    });
  }

  const ctxValue = {
    pageName: state.page,
    scrollTo: handleScrollToPage,
  };
  return (
    <ScrollContext.Provider value={ctxValue}>{children}</ScrollContext.Provider>
  );
}
