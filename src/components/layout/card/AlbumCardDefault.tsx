import { useDispatch } from "react-redux";
import usePlayAlbum from "../../../hooks/usePlayAlbum";
import _Album from "../../../types/_Album";
import { updatePlayMusic } from "../../../store/playMusic";

AlbumCardDefault.propTypes = {};

function AlbumCardDefault({ item }: { item: _Album }) {
  const { info , playlist } = usePlayAlbum({item});
  const dispath = useDispatch()


  const handleClick = () => {

    dispath(updatePlayMusic({info, playlist}));

  }


  return (
    <div className="album-list__item">
      <div className="album-list__item-img" onClick={handleClick}>
        <div className="album-list__item-img-bg"></div>
        <img src={item.image_url} alt="" className="ratio" />
        <div className="album__play-icon">
          <i className="lni lni-play"></i>
        </div>
      </div>

      {item.name && (
        <div className="album-list__item-name line-2">{item.name}</div>
      )}
      {item.singers_name && (
        <div className="album-list__item-singer line-2">
          {item.singers_name}
        </div>
      )}
      {item.updated_at && (
        <div className="album-list__item-desciption line-2">
          {item.updated_at}
        </div>
      )}
    </div>
  );
}

export default AlbumCardDefault;
