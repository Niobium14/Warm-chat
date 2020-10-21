// IMPORT PICTURES FOR NEW POST
import profile_pic from "../../img/profile_pic.jpg";
import person1 from "../../img/person1.jpg";
import person2 from "../../img/person2.jpg";
import person3 from "../../img/person3.jpg";

// TYPE FOR MESSAGES
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
};

// THIS REDUCER TAKES IN THE STATE AND THE ACTION CALLED
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // ADD POST
      let newPost = {
        id: 5,
        name: "Me",
        message: state.newPostText,
        img: profile_pic,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      // TEXT FROM TEXTAREA (POSTS)
      state.newPostText = action.newPostText;
      return state;

    default:
      return state;
  }
};

// ADD POST ACTION CREACTOR
export const addPostActionCreator = () => ({ type: ADD_POST });
// UPDATE NEW POST TEXT ACTION CREACTOR
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newPostText: text,
});

export default profileReduser;