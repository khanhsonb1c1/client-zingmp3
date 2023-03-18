import React from "react";

function TheHeader() {
  return (
    <header className="header">
      
      <div className="header__left">
        <i className="lni lni-arrow-left"></i>
        <i className="lni lni-arrow-right"></i>
      </div>
      <div className="header__search">
        <i className="lni lni-search-alt"></i>
        <div className="header__search-wrap-input">
          <input
            type="text"
            placeholder="Tìm kiếm tên bài hát, nghệ sĩ, lời bài hát,..."
          />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right-dowload">
          <i className="lni lni-download"></i>
          <p>Tải bản MacOS</p>
        </div>
        <div className="header__right-premium">
          <i className="lni lni-diamond-alt"></i>
        </div>
        <div className="header__right-setting">
          <i className="lni lni-cog"></i>
        </div>
        <div className="header__right-avata">
          <i className="lni lni-user"></i>
        </div>
      </div>
    </header>
  );
}

export default TheHeader;
