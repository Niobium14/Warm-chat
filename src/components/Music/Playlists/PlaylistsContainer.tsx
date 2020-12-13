import { connect } from "react-redux";
import { RootState } from "../../../redux/redux-store";
import { getMusic } from "../../../redux/selectors/music-selector";
import Playlists from "./Playlists";
import { musicType } from "../../../redux/myReducers/music-reducer";

type mapStateToPropsType = {
  music: Array<musicType>;
};

let mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    music: getMusic(state),
  };
};
const PlaylistsContainer = connect(mapStateToProps)(Playlists);
export default PlaylistsContainer;
