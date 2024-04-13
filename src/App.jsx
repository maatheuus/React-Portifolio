import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import SkillsPage from "./pages/Skills";
import ContactPage from "./pages/Contact";
import ColorThemeContext from "./context/color-theme-context";
import MainProjectsPage from "./pages/MainProjectsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "skills", element: <SkillsPage /> },
      { path: "projects", element: <MainProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  return (
    <ColorThemeContext>
      <RouterProvider router={router} />
    </ColorThemeContext>
  );
}

export default App;
