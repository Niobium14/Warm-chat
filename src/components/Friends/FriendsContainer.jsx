import { connect } from "react-redux";
import {
  followActionCreator,
  setUsersActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
} from "../../redux/myRedusers/friends-reduser";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    users: state.friendsPage.users,
    pageSize: state.friendsPage.pageSize,
    totalUsersCount: state.friendsPage.totalUsersCount,
    currentPage: state.friendsPage.currentPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountActionCreator(totalUsersCount));
    },
  };
};
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer;
