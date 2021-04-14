// IMPORT PICTURES FOR NEW POST
import { BaseThunkType, InferActionsTypes, RootState } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import person1 from "../../img/person1.jpg";
import person2 from "../../img/person2.jpg";
import person3 from "../../img/person3.jpg";
import { stopSubmit } from "redux-form";
import { photosType, postsType, profileType } from "../../types/types";
import { ResponseCodes } from "../../api/api";
import { profileAPI } from "../../api/GetProfile";

// INITIAL STATE
let initialState = {
  posts: [
    {
      id: 1,
      message:
        " Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. ",
      name: "Maria Simpson ",
      img: person1,
    },
    {
      id: 2,
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quibusdam eaque exercitationem atque perferendis minus aut corrupti reprehenderit molestias sapiente?          ",
      name: "Ellenor Stanton ",
      img: person2,
    },
    {
      id: 3,
      message:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      name: "Alex Dochkon",
      img: person3,
    },
  ] as Array<postsType>,
  newPostText: "",
  profile: null as profileType | null,
  comment: null as null | string,
  commentPhoto: null as null | any,
  status: "" as string | null,
  error: null as null | string,
  // LOADING
  isFetching: false,
};

type initialStateType = typeof initialState;
// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const profileReducer = (
  state: initialStateType = initialState,
  action: ActionType
): initialStateType => {
  switch (action.type) {
    case "ADD_POST": {
      // ADD POST
      let newPost = {
        id: 5,
        name: "Me",
        message: action.newPostText,
        img: action.commentPhoto,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
      };
    }
    case "SET_PROFILE_STATUS": {
      // TEXT FROM TEXTAREA (POSTS)
      return {
        ...state,
        status: action.status,
      };
    }
    case "UPDATE_PROFILE_STATUS": {
      // TEXT FROM TEXTAREA (POSTS)
      return {
        ...state,
        status: action.status,
      };
    }
    case "UPDATE_PROFILE_COMMENT": {
      // TEXT FROM TEXTAREA (POSTS)
      return {
        ...state,
        comment: action.comment,
      };
    }
    case "SET_USER_PROFILE": {
      // SET USER
      return {
        ...state,
        profile: action.profile,
      };
    }
    case "SAVE_PHOTO_SUCCESS": {
      // SAVE PHOTO
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as profileType,
      };
    }
    case "SHOW_ERROR": {
      // (ADD)SHOW ERROR
      return {
        ...state,
        error: action.error,
      };
    }
    // GIF
    case "TOGGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

// action creators
type ActionType = InferActionsTypes<typeof actions>;

export const actions = {
  // ADD POST ACTION CREATOR
  addPostActionCreator: (newPostText: string, commentPhoto: any) =>
    ({
      type: "ADD_POST",
      newPostText,
      commentPhoto,
    } as const),

  // SET USER PROFILE ACTION CREATOR
  setUserProfile: (profile: null | profileType) =>
    ({
      type: "SET_USER_PROFILE",
      profile,
    } as const),

  // GET STATUS PROFILE ACTION CREATOR
  setStatusProfile: (status: null | string) =>
    ({
      type: "SET_PROFILE_STATUS",
      status,
    } as const),

  // UPDATE STATUS PROFILE ACTION CREATOR
  updateStatusProfile: (status: null | string) =>
    ({
      type: "UPDATE_PROFILE_STATUS",
      status,
    } as const),

  // UPDATE STATUS PROFILE ACTION CREATOR
  updateCommentProfile: (comment: string) =>
    ({
      type: "UPDATE_PROFILE_COMMENT",
      comment,
    } as const),

  // UPDATE STATUS PROFILE ACTION CREATOR
  savePhotoSuccess: (photos: photosType) =>
    ({
      type: "SAVE_PHOTO_SUCCESS",
      photos,
    } as const),

  // SHOW ERROR ACTION CREATOR
  showError: (error: string) =>
    ({
      type: "SHOW_ERROR",
      error,
    } as const),

  // SET TOTAL USERS COUNT ACTION CREATOR
  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: "TOGGLE_IS_FETCHING",
      isFetching,
    } as const),
};

// THUNKS
type ThunkType = BaseThunkType<ActionType>;

export const getProfileThunkCreator = (userId: number): ThunkType => async (
  dispatch
) => {
  try {
    let data = await profileAPI.getProfile(userId);
    dispatch(actions.setUserProfile(data));
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export const getStatusThunkCreator = (userId: number): ThunkType => async (
  dispatch
) => {
  try {
    let data = await profileAPI.getStatus(userId);
    dispatch(actions.setStatusProfile(data));
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export const updateStatusThunkCreator = (status: string): ThunkType => async (
  dispatch
) => {
  try {
    dispatch(actions.toggleIsFetching(true));
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === ResponseCodes.Success) {
      dispatch(actions.updateStatusProfile(status));
      dispatch(actions.toggleIsFetching(false));
    } else {
      dispatch(actions.showError(response.data.messages[0]));
    }
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export const updateCommentThunkCreator = (comment: string): ThunkType => async (
  dispatch
) => {
  try {
    dispatch(actions.toggleIsFetching(true));
    let response = await profileAPI.updateComment(comment);
    if (response.data.resultCode === ResponseCodes.Success) {
      dispatch(actions.updateCommentProfile(comment));
      dispatch(actions.toggleIsFetching(false));
    }
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export const savePhotoThunkCreator = (photos: photosType): ThunkType => async (
  dispatch
) => {
  try {
    dispatch(actions.toggleIsFetching(true));
    let data = await profileAPI.savePhoto(photos);
    if (data.resultCode === ResponseCodes.Success) {
      //DATA.DATA - photo
      dispatch(actions.savePhotoSuccess(data.data));
      dispatch(actions.toggleIsFetching(false));
    }
  } catch (error) {
    dispatch(actions.showError("Something goes wrong"));
  }
};

export const saveProfileThunkCreator = (
  profile: profileType
): ThunkType => async (dispatch: any, getState: RootState) => {
  try {
    dispatch(actions.toggleIsFetching(true));
    let userId = await getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResponseCodes.Success) {
      dispatch(getProfileThunkCreator(userId));
      dispatch(actions.toggleIsFetching(false));
    } else {
      dispatch(stopSubmit("contacts", { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  } catch (error) {
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.showError("Something goes wrong"));
  }
};

export default profileReducer;
