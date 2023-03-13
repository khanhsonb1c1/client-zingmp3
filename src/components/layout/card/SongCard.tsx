import type { PropsWithChildren } from "react";

SongCard.propTypes = {};

type CardType = PropsWithChildren<{
  title: string;
  img: string;
  singer: string;
  updated_at: string;
}>;

function SongCard({ item }: { item: CardType }) {
  return (
    <div className="song-list__item">
      <img src={item.img} alt="" />
      <div className="song-list__item__content">
        <div className="song-list__item__content-name line-1">{item.title}</div>
        <div className="song-list__item__content-singer line-1">
          {item.singer}
        </div>
        <div className="song-list__item__content-date">{item.updated_at}</div>
      </div>

      <div className="song-list__item-btn">
        <i className="lni lni-more"></i>
      </div>
    </div>
  );
}

export default SongCard;
