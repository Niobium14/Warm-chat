// CHECK AUTH SELECTOR
export const getUsers = (state) => {
  return state.friendsPage.users;
};
// GET USER ID SELECTOR
export const getPageSize = (state) => {
  return state.friendsPage.pageSize;
};
// GET USER ID SELECTOR
export const getTotalUsersCount = (state) => {
  return state.friendsPage.totalUsersCount;
};
// GET USER ID SELECTOR
export const getCurrentPage = (state) => {
  return state.friendsPage.currentPage;
};
// GET USER ID SELECTOR
export const checkIsFetching = (state) => {
  return state.friendsPage.isFetching;
};
// GET USER ID SELECTOR
export const checkToggleIsFetching = (state) => {
  return state.friendsPage.toggleIsFetching;
};
// GET USER ID SELECTOR
export const setFollowingInProgress = (state) => {
  return state.friendsPage.followingInProgress;
};

