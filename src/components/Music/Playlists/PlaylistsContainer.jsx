import { connect } from "react-redux";
import { getMusic } from "../../../redux/selectors/music-selector";
import Playlists from "./Playlists";

let mapStateToProps = (state) => {
  return {
    music: getMusic(state),
  };
};
const PlaylistsContainer = connect(mapStateToProps)(Playlists);
export default PlaylistsContainer;
