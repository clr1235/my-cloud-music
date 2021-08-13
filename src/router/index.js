import loadable from "@loadable/component";

// 使用 @loadable/component 进行动态加载
const Home = loadable(() => import("@/pages/home"));
const About = loadable(() => import("@/pages/about"));
const Users = loadable(() => import("@/pages/users"));
const NotFound = loadable(() => import("@/pages/404"));

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/about",
    component: About,
    exact: true,
  },
  {
    path: "/users",
    component: Users,
    exact: true,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
