import React from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import css from "./Music.module.css";
import PlaylistsContainer from "./Playlists/PlaylistsContainer";

const Music = () => {
  return (
    <div className={css.musicPage}>
      <PlaylistsContainer />
    </div>
  );
};
export default compose(withAuthRedirect)(Music);
