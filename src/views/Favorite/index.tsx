import { useEffect, useLayoutEffect, useState } from "react";
import _Album from "../../types/_Album";
import { useLocation, useParams } from "react-router-dom";
import avtUrl from "../../assets/images/unnamed.png";
import usePlayAlbum from "../../hooks/usePlayAlbum";
import { updatePlayMusic } from "../../store/playMusic";
import { useDispatch, useSelector } from "react-redux";
import SongCardSmall from "../../components/layout/card/SongCardSmall";

function FavoritePage() {
  const dispath = useDispatch();
  const [playlist, setPlayList] = useState(Array<string>);
  const [info, setInfo] = useState({});

  const album = useSelector((state: any) => state.user?.user?.favoriteMusics) || [];

  useEffect(() => {
    if (album.length) {
      const plays = album.map((e: any) => e.play_url);

      console.log(plays);
      setPlayList(plays);

      const info = {
        image_url: avtUrl,
        singers_name: "...",
        name: "Danh sách yêu thích",
      };

      setInfo(info);
    }
  }, [album]);

  const handlePlay = () => {
    dispath(updatePlayMusic({ info, playlist }));
  };

  return (
    <div className="detail-page favorite">
      <div className="detail-page__infomation">
        <div className="detail-page__infomation__img">
          <div className="bg">
            <i className="lni lni-play" onClick={handlePlay}></i>
          </div>
          <img className="scale" src={avtUrl} alt="" />
        </div>
        <div className="detail-page__infomation__name">Bài hát yêu thích</div>

        <div className="detail-page__infomation__button" onClick={handlePlay}>
          <i className="lni lni-play"></i>
          Phát ngẫu nhiên
        </div>
        <div className="detail-page__infomation__btn-options">
          <i className="lni lni-heart"></i>
          <i className="lni lni-more"></i>
        </div>
      </div>
      <div className="detail-page__songs">
        <div className="detail-page__songs-table">
          <div className="detail-page__songs-table-head">
            <div className="col-5">
              <p className="float-start">Bài hát</p>
            </div>
            <div className="col-25">
              <p className="">Album</p>
            </div>
            <div className="col-25">
              <p className="float-end">Thời gian</p>
            </div>
          </div>
          <div className="detail-page__songs-table-body">
            {album?.map((item: any) => (
              <SongCardSmall item={item} key={item.id} name={album.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FavoritePage;
