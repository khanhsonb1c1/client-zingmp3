import ContainerListSong from "../../components/layout/ContainerListSong";
import SongCard from "../../components/layout/card/SongCard";
import { dataListNewSong } from "../../data/listNewSong";

TheNewSongs.propTypes = {};

function TheNewSongs() {
  return (
    <div className="home-page__row">
      <ContainerListSong title={"Mới Phát Hành"} tabs={true}>
        {dataListNewSong.map((item) => {
          return <SongCard item={item} />;
        })}
      </ContainerListSong>
    </div>
  );
}

export default TheNewSongs;
