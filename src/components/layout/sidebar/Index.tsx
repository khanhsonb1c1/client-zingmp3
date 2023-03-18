import logo from "../../../assets/images/ZingMP3logo.png";

function TheSidebar() {
  return (
    <div>
      <aside className="aside">
        <div className="aside__logo">
          <img src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.9.11/static/media/icon_zing_mp3_60.f6b51045.svg" alt="" className="logo-mini" />
          <img className="logo" src={logo} />
        </div>
        <div className="aside__body">
          <ul>
            <li>
              <i className="lni lni-user"></i>
              <a href="#">Cá Nhân</a>
            </li>
            <li>
              <i className="lni lni-play"></i>
              <a href="#">Khám phá</a>
            </li>
            <li>
              <i className="lni lni-grid-alt"></i>
              <a href="#">Album</a>
            </li>
            <li>
              <i className="lni lni-headphone"></i>
              <a href="#">Radio</a>
            </li>
            <li>
              <i className="lni lni-bookmark"></i>
              <a href="#">Theo dõi</a>
            </li>
          </ul>

          <div className="aside__line"></div>

          <ul>
            <li>
              <i className="lni lni-music"></i>
              <a href="#">Nhạc mới</a>
            </li>
            <li>
              <i className="lni lni-grid-alt"></i>
              <a href="#">Thể loại</a>
            </li>
            <li>
              <i className="lni lni-star-half"></i>
              <a href="#">TOP 100</a>
            </li>
            <li>
              <i className="lni lni-mic"></i>
              <a href="#">MV</a>
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
