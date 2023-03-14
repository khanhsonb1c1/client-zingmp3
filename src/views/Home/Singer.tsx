import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import { dataListSinger } from "../../data/listSinger";

Singer.propTypes = {};

function Singer() {
  return (
    <div className="home-page__row">
      <ContainerListAlbum title={"Nghệ Sĩ Thịnh Hành"}>
        {dataListSinger.map((item) => {
          return <AlbumCardDefault item={item} />;
        })}
      </ContainerListAlbum>
    </div>
  );
}

export default Singer;
