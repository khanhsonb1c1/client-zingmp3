import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

type CardType = PropsWithChildren<{
  title: string;
  img: string;
  id: string;
}>;

function AlbumCardSmall({ item }: { item: CardType }) {
  return (
    <div className="album-list__item-small cursor-pointer">
      <img src={item.img} alt="" />
      <Link to={`/album/${item.id}`}>
        <div className="album-list__item-small-name line-2">{item.title}</div>
      </Link>
    </div>
  );
}

export default AlbumCardSmall;
