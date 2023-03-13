import type {PropsWithChildren} from "react";

ContainerListAlbum.propTypes = {};

type ContainerListAlbumPropsType = PropsWithChildren<{
  title: string,
}>

function ContainerListAlbum({ children, title }: ContainerListAlbumPropsType) {
  return (
    <div className="album-list">
      <span className="album-list__title">{title}</span>
      <div className="album-list__items">{children}</div>
    </div>
  );
}

export default ContainerListAlbum;
