import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import AlbumCardDefault from "../../components/layout/card/AlbumCardDefault";
import { dataListTopRanker } from "../../data/listTopRanker";

TopRanker.propTypes = {
    
};

function TopRanker() {
    return (
        <div className="home-page__row">
        <ContainerListAlbum title={"Top 100"}>
          {dataListTopRanker.map((item) => (
            <AlbumCardDefault item={item} />
          ))}
        </ContainerListAlbum>
      </div>
    );
}

export default TopRanker;