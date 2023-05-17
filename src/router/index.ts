import { TOPALBUMS } from "../constants";
import AlbumPage from "../views/Album";
import CustomerPage from "../views/Customer/Index";
import HomePage from "../views/Home";
import test from "../views/Home/test";
import SingerPage from "../views/Singer";
import TopAlbum from "../views/TopAlbum";

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
  {
    path: TOPALBUMS,
    component: TopAlbum
  },
];

const privateRoutes = [
  {
    path: "/customer",
    component: CustomerPage
  },
];

export { publicRoutes, privateRoutes };
