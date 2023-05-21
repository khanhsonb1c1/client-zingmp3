import { useEffect, useLayoutEffect } from "react";
import { fetchAlbum } from "../../service/album";
import { useDispatch, useSelector } from "react-redux";
import { updateListVPOP } from "../../store/album_top100";
import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import _Album from "../../types/_Album";
import { TOP100_ID, VPOP_ID } from "../../constants/keys_id";

interface AlbumTopStore {
  list_top_Vpop: Array<_Album>;
}

function TopVPop() {
  const dispath = useDispatch();

  const filter = {
    tags_id: [TOP100_ID, VPOP_ID],
  };

  const list = useSelector(
    (state: { album_top100: AlbumTopStore }) => state.album_top100.list_top_Vpop
  );

  const fetch = () => {
    fetchAlbum({ filter: filter }).then(({ data }) => {
      dispath(updateListVPOP(data.data));
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
        <ContainerListAlbum title={"Nhạc Việt"}>
          {list.map((item) => (
            <AlbumCardDefault item={item} key={item.id} />
          ))}
        </ContainerListAlbum>
      )}
    </div>
  );
}

export default TopVPop;
