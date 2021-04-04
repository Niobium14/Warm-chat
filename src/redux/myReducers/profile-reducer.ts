// IMPORT PICTURES FOR NEW POST
import { RootState } from "./../redux-store";
import { ThunkAction } from "redux-thunk";
import person1 from "../../img/person1.jpg";
import person2 from "../../img/person2.jpg";
import person3 from "../../img/person3.jpg";
import { stopSubmit } from "redux-form";
import { photosType, postsType, profileType } from "../../types/types";
import { profileAPI, ResponseCodes } from "../../api/api";

// TYPE FOR MESSAGES
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE-PROFILE-STATUS";
const UPDATE_PROFILE_COMMENT = "UPDATE-PROFILE-COMMENT";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";
const SHOW_ERROR = "SHOW-ERROR";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

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
    case ADD_POST: {
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
    case SET_PROFILE_STATUS: {
      // TEXT FROM TEXTAREA (POSTS)
      return {
        ...state,
        status: action.status,
      };
    }
    case UPDATE_PROFILE_STATUS: {
      // TEXT FROM TEXTAREA (POSTS)
      return {
        ...state,
        status: action.status,
      };
    }
    case UPDATE_PROFILE_COMMENT: {
      // TEXT FROM TEXTAREA (POSTS)
      return {
        ...state,
        comment: action.comment,
      };
    }
    case SET_USER_PROFILE: {
      // SET USER
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      // SAVE PHOTO
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as profileType,
      };
    }
    case SHOW_ERROR: {
      // (ADD)SHOW ERROR
      return {
        ...state,
        error: action.error,
      };
    }
    // GIF
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

// ACTIONS
type ActionType =
  | addPostActionCreatorType
  | setUserProfileType
  | setStatusProfileType
  | updateStatusProfileType
  | updateCommentProfileType
  | savePhotoSuccessType
  | showErrorType
  | toggleIsFetchingType;
// ADD POST ACTION CREATOR
type addPostActionCreatorType = {
  type: typeof ADD_POST;
  newPostText: string;
  commentPhoto: any;
};
// ADD POST ACTION CREATOR
export const addPostActionCreator = (
  newPostText: string,
  commentPhoto: any
): addPostActionCreatorType => ({
  type: ADD_POST,
  newPostText,
  commentPhoto,
});
// SET USER PROFILE ACTION CREATOR
type setUserProfileType = {
  type: typeof SET_USER_PROFILE;
  profile: null | profileType;
};
// SET USER PROFILE ACTION CREATOR
export const setUserProfile = (
  profile: null | profileType
): setUserProfileType => ({
  type: SET_USER_PROFILE,
  profile,
});
// GET STATUS PROFILE ACTION CREATOR
type setStatusProfileType = {
  type: typeof SET_PROFILE_STATUS;
  status: null | string;
};
// GET STATUS PROFILE ACTION CREATOR
export const setStatusProfile = (
  status: null | string
): setStatusProfileType => ({
  type: SET_PROFILE_STATUS,
  status,
});
// UPDATE STATUS PROFILE ACTION CREATOR
type updateStatusProfileType = {
  type: typeof UPDATE_PROFILE_STATUS;
  status: null | string;
};
// UPDATE STATUS PROFILE ACTION CREATOR
export const updateStatusProfile = (
  status: null | string
): updateStatusProfileType => ({
  type: UPDATE_PROFILE_STATUS,
  status,
});
// UPDATE STATUS PROFILE ACTION CREATOR
type updateCommentProfileType = {
  type: typeof UPDATE_PROFILE_COMMENT;
  comment: string;
};
// UPDATE STATUS PROFILE ACTION CREATOR
export const updateCommentProfile = (
  comment: string
): updateCommentProfileType => ({
  type: UPDATE_PROFILE_COMMENT,
  comment,
});
// UPDATE STATUS PROFILE ACTION CREATOR
type savePhotoSuccessType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: photosType;
};
// UPDATE STATUS PROFILE ACTION CREATOR
export const savePhotoSuccess = (photos: photosType): savePhotoSuccessType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});
// SHOW ERROR ACTION CREATOR
type showErrorType = {
  type: typeof SHOW_ERROR;
  error: string;
};
// SHOW ERROR ACTION CREATOR
export const showError = (error: string): showErrorType => ({
  type: SHOW_ERROR,
  error,
});
// SET TOTAL USERS COUNT ACTION CREATOR
type toggleIsFetchingType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
// SET TOTAL USERS COUNT ACTION CREATOR
export const toggleIsFetching = (
  isFetching: boolean
): toggleIsFetchingType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

// THUNKS
type ThunkType = ThunkAction<void, RootState, unknown, ActionType>;

export const getProfileThunkCreator = (userId: number): ThunkType => async (
  dispatch
) => {
  try {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(data));
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

export const getStatusThunkCreator = (userId: number): ThunkType => async (
  dispatch
) => {
  try {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatusProfile(data));
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

export const updateStatusThunkCreator = (status: string): ThunkType => async (
  dispatch
) => {
  try {
    dispatch(toggleIsFetching(true));
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === ResponseCodes.Success) {
      dispatch(updateStatusProfile(status));
      dispatch(toggleIsFetching(false));
    } else {
      dispatch(showError(response.data.messages[0]));
    }
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

export const updateCommentThunkCreator = (comment: string): ThunkType => async (
  dispatch
) => {
  try {
    dispatch(toggleIsFetching(true));
    let response = await profileAPI.updateComment(comment);
    if (response.data.resultCode === ResponseCodes.Success) {
      dispatch(updateCommentProfile(comment));
      dispatch(toggleIsFetching(false));
    }
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

export const savePhotoThunkCreator = (photos: photosType): ThunkType => async (
  dispatch
) => {
  try {
    dispatch(toggleIsFetching(true));
    let data = await profileAPI.savePhoto(photos);
    if (data.resultCode === ResponseCodes.Success) {
      //DATA.DATA - photo
      dispatch(savePhotoSuccess(data.data));
      dispatch(toggleIsFetching(false));
    }
  } catch (error) {
    dispatch(showError("Something goes wrong"));
  }
};

export const saveProfileThunkCreator = (
  profile: profileType
): ThunkType => async (dispatch: any, getState: RootState) => {
  try {
    dispatch(toggleIsFetching(true));
    let userId = await getState().auth.userId;
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResponseCodes.Success) {
      dispatch(getProfileThunkCreator(userId));
      dispatch(toggleIsFetching(false));
    } else {
      dispatch(stopSubmit("contacts", { _error: data.messages[0] }));
      return Promise.reject(data.messages[0]);
    }
  } catch (error) {
    dispatch(toggleIsFetching(false));
    dispatch(showError("Something goes wrong"));
  }
};

export default profileReducer;
