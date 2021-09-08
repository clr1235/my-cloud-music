import loadable from "@loadable/component";

// 使用 @loadable/component 进行动态加载
const Home = loadable(() => import("@/pages/home"));
const Login = loadable(() => import("@/pages/login"));
const About = loadable(() => import("@/pages/about"));
const Users = loadable(() => import("@/pages/users"));
const NotFound = loadable(() => import("@/pages/error/404"));

const allRoutes = [
  {
    path: "/",
    component: Home,
    name: "首页",
    key: "index",
    exact: true,
    routes: [],
  },
  {
    path: "/login",
    component: Login,
    name: "登录页",
    key: "login",
    exact: true,
    routes: [],
  },
  {
    path: "*",
    key: "*404",
    component: NotFound,
  },
];

export default allRoutes;
