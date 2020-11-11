import thunk from "redux-thunk";
import authReducer from "./myReducers/auth-reducer";
import profileReducer from "./myReducers/profile-reducer";
import messagesReducer from "./myReducers/messages-reducer";
import friendsReducer from "./myReducers/friends-reducer";
import newsReducer from "./myReducers/news-reducer";
import musicReducer from "./myReducers/music-reducer";
import { reducer as formReducer } from "redux-form";

// IMPORT REDUX FEATURES
const { createStore, combineReducers, applyMiddleware } = require("redux");

// REDUCERS TO STATE
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  newsPage: newsReducer,
  musicPage: musicReducer,
  auth: authReducer,
  form: formReducer,
});

// CREATE STORE
let store = createStore(reducers, applyMiddleware(thunk));
export default store;
