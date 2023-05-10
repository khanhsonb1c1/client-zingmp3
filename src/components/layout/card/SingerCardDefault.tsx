import { Link } from "react-router-dom";
import Singer from "../../../types/Singer";

function SingerCardDefault({ item }: { item: Singer }) {
  const handleClick = () => {
    //
  };

  return (
    <div className="album-list__item">
      <Link to={"/singers"}>
        <div className="album-list__item-img" onClick={handleClick}>
          <div className="album-list__item-img-bg"></div>
          <img src={item.image_url} alt="" className="ratio" />
        </div>
      </Link>
    </div>
  );
}

export default SingerCardDefault;
