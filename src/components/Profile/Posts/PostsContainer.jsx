import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/myReducers/profile-reducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // DISPATCH ADD POST ACTION CREATOR
    sentPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};

// CONTAINER FOR CHAT TEXTAREA
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;
