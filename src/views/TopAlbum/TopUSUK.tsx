import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import { TOP100_ID, USUK_ID } from "../../constants/keys_id";
import { fetchAlbum } from "../../service/album";
import { updateListUSUK, updateListVPOP } from "../../store/album_top100";
import _Album from "../../types/_Album";

interface AlbumTopStore {
    list_top_US_UK: Array<_Album>;
}

function TopUSUK() {
  const dispath = useDispatch();

  const filter = {
    tags_id: [TOP100_ID, USUK_ID],
  };

  const list = useSelector(
    (state: { album_top100: AlbumTopStore }) => state.album_top100.list_top_US_UK
  );

  const fetch = () => {
    fetchAlbum({ filter: filter }).then(({ data }) => {
      dispath(updateListUSUK(data.data));
    });
  };

  useLayoutEffect(() => {
    if (!list.length) {
      fetch();
    }
  }, []);

  useEffect(() => {
    console.log("list", list);
  }, [list]);

  return (
    <div className="mt-3">
      {list && (
        <ContainerListAlbum title={"Nhạc Âu Mỹ"}>
          {list.map((item) => (
            <AlbumCardDefault item={item} key={item.id} />
          ))}
        </ContainerListAlbum>
      )}
    </div>
  );
}

export default TopUSUK;
