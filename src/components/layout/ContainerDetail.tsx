import { useDispatch } from "react-redux";
import { DESCRIPTION } from "../../constants";
import usePlayAlbum from "../../hooks/usePlayAlbum";
import _Album from "../../types/_Album";
import TextTime from "../input/TextTime";
import SongCardSmall from "./card/SongCardSmall";
import { updatePlayMusic } from "../../store/playMusic";


function ContainerDetail({ album }: { album: _Album }) {

  const dispath = useDispatch();

  const { info, playlist } = usePlayAlbum({ item: album });

  const handleRandom = () => {
    dispath(updatePlayMusic({info, playlist}))
  }

  return (
    <div>
      {album && (
        <div className="detail-page">
          <div className="detail-page__infomation">
            <div className="detail-page__infomation__img">
              <img
                src={album.image_url}
                alt=""
              />
            </div>
            <div className="detail-page__infomation__name">{album.name}</div>
            <div className="detail-page__infomation__text">
              Ngày cập nhật: <TextTime timestamp={album.updated_at}></TextTime>
            </div>
            <div className="detail-page__infomation__text line-2">
              {album.singers_name}
            </div>
            <div className="detail-page__infomation__text">
              {album.likes || 0} like
            </div>
            <div className="detail-page__infomation__button" onClick={handleRandom}>
              <i className="lni lni-play"></i>
              Phát ngẫu nhiên
            </div>
            <div className="detail-page__infomation__btn-options">
              <i className="lni lni-heart"></i>
              <i className="lni lni-more"></i>
            </div>
          </div>
          <div className="detail-page__songs">
            <div className="detail-page__songs-description">
              <span>Lời tựa</span>
              <p>{album.description || DESCRIPTION}</p>
            </div>
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
                {album?.musics?.map((item) => (
                  <SongCardSmall item={item} key={item.id} name={album.name}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContainerDetail;
