import type { PropsWithChildren } from "react";

type CardType = PropsWithChildren<{
  
}>;

AlbumCardDefault.propTypes = {};

function AlbumCardDefault({ item }: { item: any }) {
  return (
    <div className="album-list__item">
      <img src={item.img} alt="" />
      <div className="album-list__item-name line-2">{item.title}</div>
      <div className="album-list__item-singer line-2">{item.singer}</div>
    </div>
  );
}

export default AlbumCardDefault;
