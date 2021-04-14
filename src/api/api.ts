import axios from "axios";

export const instance = axios.create({
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
