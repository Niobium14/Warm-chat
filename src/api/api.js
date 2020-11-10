import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "e0e1f089-8800-4259-bf93-b5e8950fc7f1",
  },
});

// USERS API
export const usersAPI = {
  // GET USERS FOR "FRIENDS"
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  //   FOLLOW BUTTON
  unfollowUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  //   UNFOLLOW BUTTON
  followUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
};

// PROFILE API
export const profileAPI = {
  //   GET USER FOR PROFILE
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

// AUTH API
export const authAPI = {
  //   IS AUTH
  authMe() {
    return instance.get(`auth/me`);
  },
  //   SING IN
  login(email, password, rememberMe = false) {
    return instance
      .post(`auth/login`, { email, password, rememberMe })
      .then((response) => response.data);
  },
  //   SING IN
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};
