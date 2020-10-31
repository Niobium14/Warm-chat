import friendsReduser from "./myRedusers/friends-reduser";
import messagesReduser from "./myRedusers/messages-reduser";
import profileReduser from "./myRedusers/profile-reduser";
import authReduser from "./myRedusers/auth-reduser";
import thunk from "redux-thunk";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let redusers = combineReducers({
  profilePage: profileReduser,
  messagesPage: messagesReduser,
  friendsPage: friendsReduser,
  auth: authReduser,
});

let store = createStore(redusers, applyMiddleware(thunk));
export default store;
