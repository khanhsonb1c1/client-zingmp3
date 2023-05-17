import { Link, NavLink, Navigate } from "react-router-dom";
import logo from "../../../assets/images/ZingMP3logo.png";
import { useState } from "react";
import { TOPALBUMS } from "../../../constants";

function TheSidebar() {
  const [activeName, setActiveName] = useState("");

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
            {/* <li>
              <i className="lni lni-user"></i>
              <Link to={"/album"}>Cá Nhân</Link>
            </li> */}
            <li
              className={activeName == "" ? "active-aside" : ""}
              onClick={() => {
                setActiveName("");
              }}
            >
              <Link to={"/"}>
                <i className="lni lni-play"></i>
                <p>Khám phá</p>
              </Link>
            </li>
            <li className={activeName == "album" ? "active-aside" : ""}>
              <Link to={"/albums"}>
                <i className="lni lni-grid-alt"></i>
                <p>Album</p>
              </Link>
            </li>
            <li className={activeName == "" ? "active-aside" : ""}>
              <Link to={"/radio"}>
                <i className="lni lni-headphone"></i>
                <p>Radio</p>
              </Link>
            </li>
            <li className={activeName == "" ? "active-aside" : ""}>
              <Link to={"/follows"}>
                <i className="lni lni-bookmark"></i>
                <p>Theo dõi</p>
              </Link>
            </li>
          </ul>

          <div className="aside__line"></div>

          <ul>
            <li className={activeName == "" ? "active-aside" : ""}>
              <Link to={"/newsongs"}>
                <i className="lni lni-music"></i>
                <p>Nhạc mới</p>
              </Link>
            </li>
            <li className={activeName == "" ? "active-aside" : ""}>
              <Link to={"/categories"}>
                <i className="lni lni-grid-alt"></i>
                <p>Thể loại</p>
              </Link>
            </li>
            <li className={activeName == TOPALBUMS ? "active-aside" : ""} onClick={() => {
                setActiveName(TOPALBUMS);
              }}>
              <Link to={TOPALBUMS}>
                <i className="lni lni-star-half"></i>
                <p>TOP 100</p>
              </Link>
            </li>
            <li className={activeName == "" ? "active-aside" : ""} onClick={() => {
                setActiveName("");
              }}>
              <Link to={"/mvs"}>
                <i className="lni lni-mic"></i>
                <p>MV</p>
              </Link>
            </li>
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
