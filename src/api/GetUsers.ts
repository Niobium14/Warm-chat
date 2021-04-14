import { CommonResponse, photosType } from "../types/types";
import { instance } from "./api";

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
