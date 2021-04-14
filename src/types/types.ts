export type photosType = {
  small: any;
  large: any;
};

export type postsType = {
  id: number;
  message: string;
  name: string;
  img: any;
};

export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  };
  photos: photosType;
};

export type usersType = {
  id: number;
  name: string;
  status: string;
  photos: photosType;
  followed: boolean;
};

export interface CommonResponse {
  resultCode: number;
  messages: string;
  data: object;
}
