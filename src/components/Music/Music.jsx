import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
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
export default compose(connect(null, {}), withAuthRedirect)(Music);
