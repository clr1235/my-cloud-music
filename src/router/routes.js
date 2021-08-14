import loadable from "@loadable/component";

// 使用 @loadable/component 进行动态加载
const Home = loadable(() => import("@/pages/home"));
const NotFound = loadable(() => import("@/pages/404"));

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
    path: "*",
    key: "*404",
    component: NotFound,
  },
];

export default allRoutes;
