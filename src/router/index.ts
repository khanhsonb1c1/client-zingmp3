import { ALBUMS, TOPALBUMS } from "../constants";
import AlbumPage from "../views/Album";
import AlbumList from "../views/Album/AlbumList";
import CustomerPage from "../views/Customer/Index";
import HomePage from "../views/Home";
import test from "../views/Home/test";
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
];

const privateRoutes = [
  {
    path: "/customer",
    component: CustomerPage
  },
];

export { publicRoutes, privateRoutes };
