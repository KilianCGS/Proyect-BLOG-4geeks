import { createBrowserRouter } from "react-router-dom";
import HeaderWrapper from "./components/HeaderWrapper";
import Characters from "./pages/Characters";
import Movies from "./pages/Movies";
import CharacterDetail from "./pages/CharacterDetail";

export const router = createBrowserRouter([
  {
    element: <HeaderWrapper />,
    children: [
      { path: "/", element: <Characters /> }, 
      { path: "/characters", element: <Characters /> },
      { path: "/movies", element: <Movies /> },
      { path: "/characters/:id", element: <CharacterDetail /> }
    ]
  }
]);
