import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import css from "./Music.module.css";
import PlaylistsContainer from "./Playlists/PlaylistsContainer";

const Music = (props) => {
  return (
    <div className={css.musicPage}>
      <PlaylistsContainer />
      <div className={css.bk1} />
      <div className={css.bk2} />
    </div>
  );
};
export default compose(connect(null, {}), withAuthRedirect)(Music);
