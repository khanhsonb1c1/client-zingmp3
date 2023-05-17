import AlbumPage from "../views/Album";
import CustomerPage from "../views/Customer/Index";
import HomePage from "../views/Home";
import test from "../views/Home/test";
import SingerPage from "../views/Singer";

const publicRoutes = [
  {
    path: "/",
    component: HomePage,
  },

  {
    path: "/album/:id",
    component: AlbumPage,
    
  },
  {
    path: "/singer",
    component: SingerPage,
  },
  {
    path: "/singer/:id",
  },
];

const privateRoutes = [
  {
    path: "/customer",
    component: CustomerPage
  },
];

export { publicRoutes, privateRoutes };
