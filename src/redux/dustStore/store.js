import person1 from "../img/person1.jpg";
import person2 from "../img/person2.jpg";
import person3 from "../img/person3.jpg";
import profileReduser from "../myRedusers/profile-reduser";
import messagesReduser from "../myRedusers/messages-reduser";

let store = {
  // STATE
  _state: {
    messagesPage: {
      dialogs: [
        { id: 1, name: "Adam Kironn" },
        { id: 2, name: "Mathias Crossley" },
        { id: 3, name: "Jocelyn Ponce" },
        { id: 4, name: "Neha Obrien" },
        { id: 5, name: "Siana Lucero" },
        { id: 6, name: "Diane Hopper" },
      ],
      messages: [
        {
          id: 1,
          message:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
        },
        {
          id: 2,
          message:
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.",
        },
        {
          id: 3,
          message: "The standard chunk of Lorem Ipsum used since the 1500s.",
        },
      ],
      newMessageText: "",
    },
    profilePage: {
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
    },
  },

  // GET STATE
  getState() {
    return this._state;
  },

  // RERENDER ENTIRE TREE (CALL SUBSCRIBER)
  _callSubscribe() {
    console.log("State changed");
  },

  // SOME LOGIC FOR RERANDER ENTIRE TREE (CALL SUBSCRIBER)
  subscribe(observer) {
    this._callSubscribe = observer;
  },

  // DISPATCH
  dispatch(action) {
    this._state.profilePage = profileReduser(this._state.profilePage, action);
    this._state.messagesPage = messagesReduser(
      this._state.messagesPage,
      action
    );
    this._callSubscribe(this._state);
  },
};

window.store = store;
export default store;
