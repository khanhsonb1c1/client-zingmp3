import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContainerListAlbum from "../../components/layout/ContainerListAlbum";
import SingerCardDefault from "../../components/layout/card/SingerCardDefault";
import { get_top_singers } from "../../service/singer";
import { updateListTop } from "../../store/singer";
import Singer from "../../types/Singer";

function Singers() {

  const [list, setList] = useState(Array<Singer>);
  
  const dispath = useDispatch();

  const fetchTopSinger = () => {
    get_top_singers().then(({data}) => {
      dispath(updateListTop(data));
    })
  }

  const singers = useSelector((state:any) => state.singer.list_top)

 
  useLayoutEffect(()=> {
    if(!list.length){
      fetchTopSinger()
    }
  }, [])

  useEffect(()=> {
    if(!list.length){
      setList(singers)
    }
  }, [singers])


  return (
    <div className="home-page__row">
      <ContainerListAlbum title={"Nghệ Sĩ Thịnh Hành"}>
        {list.map((item) => {
          return <SingerCardDefault item={item} key={item.id}/>;
        })}
      </ContainerListAlbum>
    </div>
  );
}

export default Singers;
