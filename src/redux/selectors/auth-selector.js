// CHECK AUTH SELECTOR
export const checkAuth = (state) => {
  return state.auth.isAuth;
};
// GET USER ID SELECTOR
export const getUserId = (state) => {
  return state.auth.userId;
};
// GET USER ID SELECTOR
export const getLogin = (state) => {
  return state.auth.login;
};
