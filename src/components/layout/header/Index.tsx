import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateUser } from "../../../store/user";

function TheHeader() {
  const [user, setUser] = useState({}) as any;
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  
  const userInfoStore = useSelector((state: any) => state.user.user);
  const navigate = useNavigate()
  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    if (userInfo) {
      dispatch(updateUser(JSON.parse(userInfo)));
    }
  }, []);

  useEffect(() => {
    setUser(userInfoStore);
  }, [userInfoStore]);

  const logOut = () => {
    localStorage.setItem("user", "");
    dispatch(updateUser({}));
    navigate('/login');
  };

  const handleSearch = (event: any) => {
    if (event.key === 'Enter') {
      navigate(`/search?search=${search}`)
    }
   
  }

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
            onChange={(event) => setSearch(event.target.value)}
            onKeyDown={handleSearch}
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

        {!user.email && (
          <Link to={"/login"}>
            <div className="header__right-avata">
              <i className="lni lni-user"></i>
            </div>
          </Link>
        )}

        {user.email && (
          <Link to={"/favorite"}>
            <div className="header__right-avata violet">
              <i className="lni lni-user"></i>
            </div>
          </Link>
        )}
        {user.email && (
          <div className="header__right-avata" onClick={logOut}>
            <i className="lni lni-exit"></i>
          </div>
        )}
      </div>
    </header>
  );
}

export default TheHeader;
