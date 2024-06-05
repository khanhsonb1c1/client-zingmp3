import { useDispatch } from "react-redux";
import usePlayAlbum from "../../../hooks/usePlayAlbum";
import _Album from "../../../types/_Album";
import { updatePlayMusic } from "../../../store/playMusic";
import { Link } from "react-router-dom";
import TextTime from "../../input/TextTime";

AlbumCardDefault.propTypes = {};

function AlbumCardDefault({ item }: { item: _Album }) {
  const { info, playlist } = usePlayAlbum({ item });
  const dispath = useDispatch();

  const handlePlayAlbum = () => {
    dispath(updatePlayMusic({ info, playlist }));
  };

  return (
    <div className="album-list__item">
      <div className="album-list__item-img" onClick={handlePlayAlbum}>
        <div className="album-list__item-img-bg"></div>
        <img src={item.image_url} alt="" className="ratio" />
        <div className="album__play-icon">
          <i className="lni lni-play"></i>
        </div>
      </div>

      {item.name && (
        <Link to={`/album/${item.id}`}>
          <div className="album-list__item-name line-2 cursor-pointer">
            {item.name}
          </div>
        </Link>
      )}
      {item.singers_name && (
        <div className="album-list__item-singer line-2">
          {item.singers_name}
        </div>
      )}
      {item.updated_at && (
        <div className="album-list__item-desciption line-2">
          <TextTime timestamp={item.updated_at}></TextTime>
        </div>
      )}
    </div>
  );
}

export default AlbumCardDefault;
