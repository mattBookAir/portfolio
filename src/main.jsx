import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./styles/index.css";
import MyInfo from "./components/MyInfo";
import ProjectsComp from "./components/projectsComp";
import ExperienceComp from "./components/ExperienceComp";
import EducationComp from "./components/EducationComp";


const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/portfolio/projects",
        element: <ProjectsComp />,
      },
      {
        path: "/portfolio/experience",
        element: <ExperienceComp />,
      },
      {
        path: "/portfolio/education",
        element: <EducationComp />,
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
