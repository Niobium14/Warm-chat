import React from "react";
import css from "./Music.module.css";
import BG from "./MusicBG/MusicBG";
import PlaylistsContainer from "./Playlists/PlaylistsContainer";

const Music = (props) => {
  return (
    <div className={css.musicPage}>
      <PlaylistsContainer />
      <BG />
    </div>
  );
};

export default Music;
