// IMPORT PICTURES FOR NEW POST
import profile_pic from "../../img/profile_pic.jpg";
import person1 from "../../img/person1.jpg";
import person2 from "../../img/person2.jpg";
import person3 from "../../img/person3.jpg";
import { profileAPI } from "../../api/api";
import { stopSubmit } from "redux-form";

// TYPE FOR MESSAGES
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_PROFILE_STATUS = "SET-PROFILE-STATUS";
const UPDATE_PROFILE_STATUS = "UPDATE-PROFILE-STATUS";
const UPDATE_PROFILE_COMMENT = "UPDATE-PROFILE-COMMENT";
const SAVE_PHOTO_SUCCESS = "SAVE-PHOTO-SUCCESS";

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
  ],
  newPostText: "",
  profile: null,
  comment: null,
  status: "",
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      // ADD POST
      let newPost = {
        id: 5,
        name: "Me",
        message: action.newPostText,
        img: profile_pic,
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
        profile: { ...state.profile, photos: action.photos },
      };
    }
    default:
      return state;
  }
};

// ADD POST ACTION CREATOR
export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
// SET USER PROFILE ACTION CREATOR
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
// GET STATUS PROFILE ACTION CREATOR
export const setStatusProfile = (status) => ({
  type: SET_PROFILE_STATUS,
  status,
});
// UPDATE STATUS PROFILE ACTION CREATOR
export const updateStatusProfile = (status) => ({
  type: UPDATE_PROFILE_STATUS,
  status,
});
// UPDATE STATUS PROFILE ACTION CREATOR
export const updateCommentProfile = (comment) => ({
  type: UPDATE_PROFILE_COMMENT,
  comment,
});
// UPDATE STATUS PROFILE ACTION CREATOR
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const getProfileThunkCreator = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatusProfile(response.data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(updateStatusProfile(status));
  }
};

export const updateCommentThunkCreator = (comment) => async (dispatch) => {
  let response = await profileAPI.updateComment(comment);
  if (response.data.resultCode === 0) {
    dispatch(updateCommentProfile(comment));
  }
};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfileThunkCreator = (profile) => async (
  dispatch,
  getState
) => {
  let userId = await getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);

  if (response.data.resultCode === 0) {
    dispatch(getProfileThunkCreator(userId));
  } else {
    dispatch(stopSubmit("contacts", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;
