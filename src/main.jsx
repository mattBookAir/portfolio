import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";
import MyInfo from "./components/MyInfo";
import ProjectsComp from "./components/ProjectsComp.jsx";
import { OrfuComp } from "./components/projectComps/OrfuComp";
import { CbComp } from "./components/projectComps/CbComp";
import { JoshComp } from "./components/projectComps/JoshComp";
import { PortfoliosComp } from "./components/projectComps/PortfoliosComp";


const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/portfolio/projects",
        element: <ProjectsComp />,
        children: [
          {
            path: "/portfolio/projects/orfu",
            element: <OrfuComp />,
          },
          {
            path: "/portfolio/projects/clickbait",
            element: <CbComp />,
          },
          {
            path: "/portfolio/projects/joshSite",
            element: <JoshComp />,
          },
          {
            path: "/portfolio/projects/magSite",
            element: <PortfoliosComp />,
          }
        ]
      },
      {
        path: "/portfolio/myInfo",
        element: <MyInfo />,
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);