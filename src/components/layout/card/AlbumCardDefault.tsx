import type { PropsWithChildren } from "react";

type CardType = PropsWithChildren<{}>;

AlbumCardDefault.propTypes = {};

function AlbumCardDefault({ item }: { item: any }) {
  return (
    <div className="album-list__item">
      <img src={item.img} alt="" />
      {item.title && (
        <div className="album-list__item-name line-2">{item.title}</div>
      )}
      {item.singer && (
        <div className="album-list__item-singer line-2">{item.singer}</div>
      )}
      {item.desciption && (
        <div className="album-list__item-desciption line-2">
          {item.desciption}
        </div>
      )}
    </div>
  );
}

export default AlbumCardDefault;
