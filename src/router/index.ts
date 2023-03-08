import CustomerPage from "../views/Customer/Index";
import HomePage from "../views/Home";
import ProductPage from "../views/Product/Index";

const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/products",
    component: ProductPage,
  },
];

const privateRoutes = [
  {
    path: "/customer",
    component: CustomerPage
  },
];

export { publicRoutes, privateRoutes };
