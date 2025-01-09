import AboutGrid from "./components/AboutGrid";
import HomeGrid from "./components/HomeGrid";
import ProjectsGrid from "./components/ProjectsGrid";
import WorkGrid from "./components/WorkGrid/WorkGrid";

export const GRIDS = [
  { label: "home", Component: HomeGrid },
  { label: "projects", Component: ProjectsGrid },
  { label: "work", Component: WorkGrid },
  { label: "about", Component: AboutGrid },
];

export const publicRoutes = ["/"];
