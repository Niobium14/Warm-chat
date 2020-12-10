import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/myReducers/profile-reducer";
import { getUserProfile } from "../../../redux/selectors/profile-selector";
import Posts from "./Posts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: getUserProfile(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // DISPATCH ADD POST ACTION CREATOR
    sentPost: (newPostText, commentPhoto) => {
      dispatch(addPostActionCreator(newPostText, commentPhoto));
    },
  };
};

// CONTAINER FOR CHAT TEXTAREA
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
