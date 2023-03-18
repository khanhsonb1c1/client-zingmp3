import CustomerPage from "../views/Customer/Index";
import HomePage from "../views/Home";
import test from "../views/Home/test";

const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/album",
    component: test,
  },
];

const privateRoutes = [
  {
    path: "/customer",
    component: CustomerPage
  },
];

export { publicRoutes, privateRoutes };
