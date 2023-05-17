import { useLayoutEffect } from "react";
import { fetchTopAlbums } from "../../service/album";
import Banner from "./Banner";
import BannerCategory from "./BannerCategory";
import Footer from "./Footer";
import Idol from "./Idol";
import Recently from "./Recently";
import Singer from "./Singer";
import TheNewSongs from "./TheNewSongs";
import TopRanker from "./TopRanker";
import Trending from "./Trending";
import { useDispatch } from "react-redux";
import { updateList } from "../../store/album";

function HomePage() {
  const dispath = useDispatch();
  useLayoutEffect(() => {
    handleFetchData();
  }, []);

  const handleFetchData = () => {
    fetchTopAlbums().then(({ data }) => {
      console.log(data, "/data");
      dispath(updateList(data));
    });
  };
  return (
    <div>
      <section className="home-page">
        <Banner />
        <Recently />
        <Trending />
        <TheNewSongs />
        <Singer />
        <BannerCategory />
        <Idol />
        <TopRanker />
        <Footer />
      </section>
    </div>
  );
}

export default HomePage;
