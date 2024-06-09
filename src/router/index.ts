import { ALBUMS, TOPALBUMS } from "../constants";
import AlbumPage from "../views/Album";
import AlbumList from "../views/Album/AlbumList";
import CustomerPage from "../views/Customer/Index";
import FavoritePage from "../views/Favorite";
import HomePage from "../views/Home";
import test from "../views/Home/test";
import LoginPage from "../views/Login";
import RegisterPage from "../views/Register";
import SearchPage from "../views/Search";
import SingerPage from "../views/Singer";
import TopAlbum from "../views/TopAlbum";

const publicRoutes = [
  { name: "home",
    path: "/",
    component: HomePage,
  },

  {
    name: "album_detail",
    path: "/album/:id",
    component: AlbumPage,
  },
  // {
  //   path: "/singer",
  //   component: SingerPage,
  // },
  // {
  //   name: "singer_detail",
  //   path: "/singer/:id",
  // },
  {
    path: `/${TOPALBUMS}`,
    component: TopAlbum,
    name: "top_album"
  },
  {
    path: `/${ALBUMS}`,
    component: AlbumList,
    name: "album_list"
  },
  {
    path: `/favorite`,
    component: FavoritePage,
    name: "favorite"
  },
  {
    path: `/search`,
    component: SearchPage,
    name: "search"
  },
];

const privateRoutes = [
  {
    path: "/customer",
    component: CustomerPage
  },
  {
    name: "login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "register",
    path: "/register",
    component: RegisterPage,
  },
];

export { publicRoutes, privateRoutes };
