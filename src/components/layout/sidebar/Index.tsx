import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/ZingMP3logo.png";
import {
  ALBUMS,
  ALLOWS,
  CATEGORIES,
  HOME,
  MVS,
  NEWSONGS,
  RADIO,
  TOPALBUMS,
} from "../../../constants";

function TheSidebar() {
  const [activeName, setActiveName] = useState("");

  const aside1 = [
    {
      name: "Khám phá",
      icon: "lni lni-play",
      path_name: HOME,
    },
    {
      name: "Album",
      icon: "lni lni-grid-alt",
      path_name: ALBUMS,
    },
    {
      name: "Radio",
      icon: "lni lni-headphone",
      path_name: RADIO,
    },
    {
      name: "Theo dõi",
      icon: "lni lni-bookmark",
      path_name: ALLOWS,
    },
  ];
  const aside2 = [
    {
      name: "Nhạc mới",
      icon: "lni lni-music",
      path_name: NEWSONGS,
    },
    {
      name: "Thể loại",
      icon: "lni lni-grid-alt",
      path_name: CATEGORIES,
    },
    {
      name: "TOP 100",
      icon: "lni lni-star-half",
      path_name: TOPALBUMS,
    },
    {
      name: "MV",
      icon: "lni lni-mic",
      path_name: MVS,
    },
  ];

  return (
    <div>
      <aside className="aside">
        <div className="aside__logo">
          <Link to={"/"}>
            <img
              src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.11/static/media/icon_zing_mp3_60.f6b51045.svg"
              alt=""
              className="logo-mini"
            />
            <img className="logo" src={logo} />
          </Link>
        </div>
        <div className="aside__body">
          <ul>
            {aside1.map((item) => (
              <li
                className={activeName == item.path_name ? "active-aside" : ""}
                onClick={() => {
                  setActiveName(item.path_name);
                }}
                key={item.name}
              >
                <Link to={`/${item.path_name}`}>
                  <i className={item.icon}></i>
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="aside__line"></div>

          <ul>
            {aside2.map((item) => (
              <li
                className={activeName == item.path_name ? "active-aside" : ""}
                onClick={() => {
                  setActiveName(item.path_name);
                }}
                key={item.name}
              >
                <Link to={`/${item.path_name}`}>
                  <i className={item.icon}></i>
                  <p>{item.name}</p>
                </Link>
              </li>
            ))}
          </ul>

          <div className="banner__update">
            Nghe nhạc không quảng cáo cùng kho nhạc VIP
            <span>Nâng cấp vip</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default TheSidebar;
