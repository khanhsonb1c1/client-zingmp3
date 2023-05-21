import { useEffect, useLayoutEffect, useState } from "react";
import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import _Album from "../../types/_Album";
import { useSelector } from "react-redux";
import TopAlbum from "../../types/TopAlbums";

TopRanker.propTypes = {};

function TopRanker() {
  const [list, setList] = useState(Array<_Album>);

  const top = useSelector(
    (state: { album: { list: TopAlbum } }) => state.album?.list
  );

  useEffect(() => {
    if (top) {
      setList(top.top100);
    }
  }, [top]);

  return (
    <div className="home-page__row">
      {list && (
        <ContainerListAlbum title={"Top 100"}>
          {list.map((item) => (
            <AlbumCardDefault item={item} key={item.id} />
          ))}
        </ContainerListAlbum>
      )}
    </div>
  );
}

export default TopRanker;
