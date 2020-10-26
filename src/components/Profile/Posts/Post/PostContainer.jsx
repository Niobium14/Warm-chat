import { connect } from "react-redux";
import Post from "./Post";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts
  }
}

const PostContainer = connect(mapStateToProps) (Post);

export default PostContainer;

