import type { PropsWithChildren } from "react";

type CardType = PropsWithChildren<{
  title: string,
  img: string,
}>

AlbumCardSmall.propTypes = {};

function AlbumCardSmall({ item }: { item: CardType }) {
  return (
    <div className="album-list__item-small">
      <img src={item.img} alt="" />
      <div className="album-list__item-small-name line-2">{item.title}</div>
    </div>
  );
}

export default AlbumCardSmall;
