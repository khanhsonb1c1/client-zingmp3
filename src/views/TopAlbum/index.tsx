import BannerTop100 from "../../components/banner/Top100";
import TopCpop from "./TopCpop";
import TopKPop from "./TopKpop";
import TopNoLyrics from "./TopNoLyrics";
import TopUSUK from "./TopUSUK";
import TopVPop from "./TopVPop";

function TopAlbum() {

  return (
    <div className="home-page__row">
      <BannerTop100 />
      <TopVPop/>
      <TopCpop/>
      <TopNoLyrics/>
      <TopUSUK/>
      <TopKPop/>
    </div>
  );
}

export default TopAlbum;
