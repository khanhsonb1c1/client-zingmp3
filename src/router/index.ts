import CustomerPage from "../views/Customer/Index";
import HomePage from "../views/Home";

const publicRoutes = [
  {
    path: "/",
    component: HomePage,
    // default layout is Container
  },

  {
    path: "/test",
    component: HomePage,
  },
];

const privateRoutes = [
  {
    path: "/customer",
    component: CustomerPage
  },
];

export { publicRoutes, privateRoutes };
