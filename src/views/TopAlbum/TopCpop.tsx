import { useEffect, useLayoutEffect } from "react";
import { fetchAlbum } from "../../service/album";
import { useDispatch, useSelector } from "react-redux";
import { updateListCPOP, updateListVPOP } from "../../store/album_top100";
import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import _Album from "../../types/_Album";
import { CPOP_ID, TOP100_ID } from "../../constants/keys_id";

interface AlbumTopStore {
  list_top_CPop: Array<_Album>;
}

function TopCpop() {
  const dispath = useDispatch();

  const list = useSelector(
    (state: { album_top100: AlbumTopStore }) => state.album_top100.list_top_CPop
  );

  const filter = {
    tags_id: [TOP100_ID, CPOP_ID]
  };

  const fetch = () => {
    fetchAlbum({ filter: filter }).then(({ data }) => {
      dispath(updateListCPOP(data.data));
    });
  };

  useLayoutEffect(() => {
    if (!list.length) {
      fetch();
    }  }, []);

  useEffect(() => {
    console.log("list", list);
  }, [list]);

  return (
    <div className="mt-3">
      {list && (
        <ContainerListAlbum title={"Nhạc Trung"}>
          {list.map((item) => (
            <AlbumCardDefault item={item} key={item.id} />
          ))}
        </ContainerListAlbum>
      )}
    </div>
  );
}

export default TopCpop;
