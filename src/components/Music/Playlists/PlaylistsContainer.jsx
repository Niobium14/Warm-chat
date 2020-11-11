import { connect } from "react-redux";
import Playlists from "./Playlists";

let mapStateToProps = (state) => {
  return {
    music: state.musicPage.music,
  };
};
const PlaylistsContainer = connect(mapStateToProps)(Playlists);
export default PlaylistsContainer;
