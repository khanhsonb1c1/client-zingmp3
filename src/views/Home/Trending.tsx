import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import { dataListTrending } from "../../data/listTrending";

Recently.propTypes = {};

function Recently() {
  return (
    <div className="home-page__row">
      <ContainerListAlbum title={"Có Thể Bạn Sẽ Thích"}>
        {dataListTrending.map((item) => (
          <AlbumCardDefault item={item} />
        ))}
      </ContainerListAlbum>
    </div>
  );
}

export default Recently;
