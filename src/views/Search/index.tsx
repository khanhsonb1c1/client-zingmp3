import { useEffect, useLayoutEffect, useState } from "react";
import _Album from "../../types/_Album";
import { useLocation, useParams, useRoutes, useSearchParams } from "react-router-dom";
import avtUrl from "../../assets/images/unnamed.png";
import usePlayAlbum from "../../hooks/usePlayAlbum";
import { updatePlayMusic } from "../../store/playMusic";
import { useDispatch, useSelector } from "react-redux";
import SongCardSmall from "../../components/layout/card/SongCardSmall";
import SongCard from "../../components/layout/card/SongCard";
import axios from "axios";

function SearchPage() {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const [list, setList] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5005/api/musics?filter[name]=${search}`
        );
        const listRes = response.data.data;
        setList(listRes);
      } catch (error: any) {
        console.log(error.response.data.error);
      }
    };
  
    useEffect(() => {
      if (search) {
        handleSearch();
      }
    }, [search]);

  const handlePlay = () => {
    // dispath(updatePlayMusic({ info, playlist }));
  };

  return (
    <div className="search">
        <h3>Kết quả tìm kiếm</h3>
      {list.map((item: any) => (
        <SongCard item={item} key={item.id} />
      ))}
    </div>
  );
}

export default SearchPage;
