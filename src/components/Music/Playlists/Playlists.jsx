import React from "react";
import css from "./Playlists.module.css";
import PlaylistElement from "./PlaylistElement/PlaylistElement";

const Playlists = (props) => {
  let playlistElement = props.music.map((element) => (
    <PlaylistElement
      title={element.title}
      author={element.author}
      playlist={element.playlist}
      timeline={element.timeline}
      link={element.link}
      img={element.img}
    />
  ));
  return <div className={css.playlist}>{playlistElement}</div>;
};

export default Playlists;
