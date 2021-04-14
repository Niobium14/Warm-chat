import { instance } from "./api";

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
