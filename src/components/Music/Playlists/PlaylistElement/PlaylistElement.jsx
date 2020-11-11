import React from "react";
import css from "./PlaylistElement.module.css";
import spotify from "../../../../img/spotify.png";

const PlaylistElement = (props) => {
  return (
    <div className={css.element}>
      <img src={props.img} className={css.playlist} />
      <div className={css.data}>
        <div className={css.title}>{props.title}</div>
        <div className={css.details}>
          <div className={css.item}>{props.author}</div>
          <div className={css.item}>{props.playlist}</div>
          <div className={css.item}>{props.timeline}</div>
        </div>
      </div>
      <a href={props.link}>
        <img src={spotify} className={css.spotify} />
      </a>
    </div>
  );
};

export default PlaylistElement;
