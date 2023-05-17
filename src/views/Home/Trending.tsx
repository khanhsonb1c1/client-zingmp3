import { useSelector } from "react-redux";
import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import TopAlbum from "../../types/TopAlbums";
import { useEffect, useState } from "react";
import _Album from "../../types/_Album";

Recently.propTypes = {};

function Recently() {
  const [list, setList] = useState(Array<_Album>);

  const top = useSelector(
    (state: { album: { list: TopAlbum } }) => state.album.list
  );

  useEffect(() => {
    setList(top.top_trending);
  }, [top]);

  return (
    <div className="home-page__row">
      {list && (
        <ContainerListAlbum title={"Có Thể Bạn Sẽ Thích"}>
          {list.map((item) => (
            <AlbumCardDefault item={item} key={item.id} />
          ))}
        </ContainerListAlbum>
      )}
    </div>
  );
}

export default Recently;
