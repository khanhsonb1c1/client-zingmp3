import type { PropsWithChildren } from "react";

ContainerListSong.propTypes = {};

type ContainerListAlbumPropsType = PropsWithChildren<{
  title: string;
  tabs: boolean;
}>;

function ContainerListSong({
  children,
  title,
  tabs,
}: ContainerListAlbumPropsType) {
  return (
    <div className="song-list">
      <div className="song-list__title">{title}</div>
      {tabs && (
        <div className="song-list__tabs">
          <div className="song-list__tabs-content">
          <div className="song-list__tabs__tab active">Tất Cả</div>
          <div className="song-list__tabs__tab">Việt Nam</div>
          <div className="song-list__tabs__tab">Quốc Tế</div>
          </div>
          <div className="song-list__tabs-right">
             Tất Cả <i className="lni lni-chevron-right"></i>
          </div>
        </div>
      )}

      <div className="song-list__items">{children}</div>
    </div>
  );
}

export default ContainerListSong;
