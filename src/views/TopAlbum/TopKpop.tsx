import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import { KPOP_ID, TOP100_ID } from "../../constants/keys_id";
import { fetchAlbum } from "../../service/album";
import { updateListKPOP } from "../../store/album_top100";
import _Album from "../../types/_Album";

interface AlbumTopStore {
    list_top_Kpop: Array<_Album>;
}

function TopKPop() {
  const dispath = useDispatch();

  const filter = {
    tags_id: [TOP100_ID, KPOP_ID],
  };

  const list = useSelector(
    (state: { album_top100: AlbumTopStore }) => state.album_top100.list_top_Kpop
  );

  const fetch = () => {
    fetchAlbum({ filter: filter }).then(({ data }) => {
      dispath(updateListKPOP(data.data));
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
        <ContainerListAlbum title={"Nhạc Hàn"}>
          {list.map((item) => (
            <AlbumCardDefault item={item} key={item.id} />
          ))}
        </ContainerListAlbum>
      )}
    </div>
  );
}

export default TopKPop;
