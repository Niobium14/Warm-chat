import React from "react";
import css from "./Playlists.module.css";
import PlaylistElement from "./PlaylistElement/PlaylistElement";
import { musicType } from "../../../redux/myReducers/music-reducer";

type PropsType = {
  music: Array<musicType>;
};

const Playlists = (props: PropsType) => {
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
