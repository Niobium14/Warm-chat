// GET USER PROFILE SELECTOR
export const getUserProfile = (state) => {
  return state.profilePage.profile;
};
// GET USER STATUS SELECTOR
export const getUserStatus = (state) => {
  return state.profilePage.status;
};
// GET USER COMMENT SELECTOR
export const getUserJobComment = (state) => {
  return state.profilePage.lookingForAJobDescription;
};
// GET ERROR SELECTOR
export const getError = (state) => {
  return state.profilePage.error;
};
export const getFetching = (state) => {
  return state.profilePage.isFetching;
}