import friendsReduser from "./myRedusers/friends-reduser";
import messagesReduser from "./myRedusers/messages-reduser";
import profileReduser from "./myRedusers/profile-reduser";

const { createStore, combineReducers } = require("redux");

let redusers = combineReducers({
  profilePage: profileReduser,
  messagesPage: messagesReduser,
  friendsPage: friendsReduser
});

let store = createStore(redusers);
export default store;
