import { instance } from "./api";

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
