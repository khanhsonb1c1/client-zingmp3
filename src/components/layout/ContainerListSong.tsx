import React from "react";
import PropTypes from "prop-types";
import type { PropsWithChildren } from "react";

ContainerListSong.propTypes = {};

type ContainerListAlbumPropsType = PropsWithChildren<{
  title: string;
}>;

function ContainerListSong({ children, title }: ContainerListAlbumPropsType) {
  return (
    <div className="song-list">
      <div className="song-list__title">{title}</div>
      <div className="song-list__items">{children}</div>
    </div>
  );
}

export default ContainerListSong;
