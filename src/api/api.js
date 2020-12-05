import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1be41c3d-0bb5-4a93-9e02-bd85f0aaafde",
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
  updateComment(comment) {
    return instance.put(`profile`, { lookingForAJobDescription: comment });
  },
  saveProfile(profile) {
    return instance.put(`profile`,  profile );
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
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
