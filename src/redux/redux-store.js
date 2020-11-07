import thunk from "redux-thunk";
import authReducer from "./myRedusers/auth-reduser";
import profileReducer from "./myRedusers/profile-reduser";
import messagesReducer from "./myRedusers/messages-reduser";
import friendsReducer from "./myRedusers/friends-reduser";
import { reducer as formReducer } from "redux-form";

const { createStore, combineReducers, applyMiddleware } = require("redux");

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  auth: authReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));
export default store;
