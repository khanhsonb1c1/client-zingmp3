import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerListSong from "../../components/layout/ContainerListSong";
import SongCard from "../../components/layout/card/SongCard";
import { music } from "../../service/music";
import { fetchAll } from "../../store/music";

function TheNewSongs() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = () => {
    new Promise(() => {
      music.all().then(({ data }) => {
        dispatch(fetchAll(data.data));
      });
    }).catch((err) => {
      console.log(err);
    });
  };

  const list = useSelector((state: any) => state.music.list);

  return (
    <div className="home-page__row">
      <ContainerListSong title={"Mới Phát Hành"} tabs={true}>
        {list.map((item: any) => (
          <SongCard item={item} key={item.id} />
        ))}
      </ContainerListSong>
    </div>
  );
}

export default TheNewSongs;
