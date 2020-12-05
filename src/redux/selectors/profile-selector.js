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
