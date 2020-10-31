import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "777e1005-dc3b-4d2a-836a-e26ea5e18c44",
  },
});

export const usersAPI = {
  // GET USERS FOR "FRIENDS"
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  //   FOLLOW BUTTON
  followUser(userId) {
    return instance
      .delete(`follow/${userId}`)
      .then((response) => response.data);
  },
  //   UNFOLLOW BUTTON
  unfollowUser(userId) {
    return instance.post(`follow/${userId}`).then((response) => response.data);
  },
  //   GET USER FOR PROFILE
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
  //   IS AUTH
  authMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const authAPI = {
  //   IS AUTH
  authMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
