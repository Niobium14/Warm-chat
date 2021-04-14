import { CommonResponse, photosType, profileType } from "../types/types";
import { instance } from "./api";

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
