import axios from "axios";
import { CommonResponse, photosType, profileType } from "../types/types";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "4115c818-4a90-4599-b13f-59b359d03228",
  },
});

// RESPONSE ENUM
export enum ResponseCodes {
  Success = 0,
  Error = 1,
}
export enum ResponseCaptcha {
  CaptchaIsRequired = 10,
}
// USER API INTERFACE
interface GetUsers {
  items: Array<user>;
  totalCount: number;
  error: string;
}
interface user {
  id: number;
  name: string;
  status: string;
  photos: photosType;
  followed: boolean;
}

// USERS API
export const usersAPI = {
  // GET USERS FOR "FRIENDS"
  getUsers(currentPage = 1, pageSize = 4) {
    return instance
      .get<GetUsers>(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  //   FOLLOW BUTTON
  unfollowUser(userId: number) {
    return instance
      .delete<CommonResponse>(`follow/${userId}`)
      .then((res) => res.data);
  },
  //   UNFOLLOW BUTTON
  followUser(userId: number) {
    return instance
      .post<CommonResponse>(`follow/${userId}`)
      .then((res) => res.data);
  },
};

// PROFILE API INTERFACE
interface GetProfile {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: photosType;
}
interface SavePhoto {
  data: {
    small: string;
    large: string;
  };
  resultCode: number;
  messages: Array<string>;
}
// PROFILE API
export const profileAPI = {
  //   GET USER FOR PROFILE
  getProfile(userId: number) {
    return instance
      .get<GetProfile>(`profile/` + userId)
      .then((res) => res.data);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/` + userId).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance.put<CommonResponse>(`profile/status`, { status: status });
  },
  updateComment(comment: string) {
    return instance.put(`profile`, { lookingForAJobDescription: comment });
  },
  saveProfile(profile: profileType) {
    return instance
      .put<CommonResponse>(`profile`, profile)
      .then((res) => res.data);
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append("image", photoFile);

    return instance
      .put<SavePhoto>(`profile/photo`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => res.data);
  },
};

// AUTH API INTERFACE
interface AuthMe {
  resultCode: number;
  messages: Array<string>;
  data: {
    id: number;
    email: string;
    login: string;
  };
}
interface Login {
  resultCode: number;
  messages: Array<string>;
  data: {
    userId: number;
  };
}
interface Logout {
  resultCode: number;
  messages: Array<string>;
  data: object;
}
// AUTH API
export const authAPI = {
  //AUTH ME
  authMe() {
    return instance.get<AuthMe>(`auth/me`).then((res) => res.data);
  },
  //LOGIN
  login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: null | string = null
  ) {
    return instance
      .post<Login>(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha,
      })
      .then((res) => res.data);
  },
  //LOGOUT
  logout() {
    return instance.delete<Logout>(`auth/login`).then((res) => res.data);
  },
};

// CAPTCHA API INTERFACE
interface GetCaptcha {
  url: string;
}
// CAPTCHA API
export const captchaAPI = {
  //GET CAPTCHA
  getCaptcha() {
    return instance
      .get<GetCaptcha>(`security/get-captcha-url`)
      .then((res) => res.data);
  },
};
