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
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
  //   FOLLOW BUTTON
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`);
  },
  //   UNFOLLOW BUTTON
  followUser(userId) {
    return instance.post(`follow/${userId}`);
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
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  //   SING IN
  logout() {
    return instance.delete(`auth/login`);
  },
};
