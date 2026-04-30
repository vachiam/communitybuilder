import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Experts } from "./pages/Experts";
import { ExpertDetail } from "./pages/ExpertDetail";
import { Articles } from "./pages/Articles";
import { ArticleDetail } from "./pages/ArticleDetail";
import { Events } from "./pages/Events";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "experts", Component: Experts },
      { path: "experts/:id", Component: ExpertDetail },
      { path: "articles", Component: Articles },
      { path: "articles/:id", Component: ArticleDetail },
      { path: "events", Component: Events },
      { path: "about", Component: About },
      { path: "login", Component: Login },
      { path: "dashboard", Component: Dashboard },
      { path: "*", Component: NotFound },
    ],
  },
]);
