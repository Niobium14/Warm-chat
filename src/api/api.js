import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3",
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
  //   IS AUTH
  authMe() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};
