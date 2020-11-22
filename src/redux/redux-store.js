import thunk from "redux-thunk";
import authReducer from "./myReducers/auth-reducer";
import profileReducer from "./myReducers/profile-reducer";
import messagesReducer from "./myReducers/messages-reducer";
import friendsReducer from "./myReducers/friends-reducer";
import newsReducer from "./myReducers/news-reducer";
import musicReducer from "./myReducers/music-reducer";
import appReducer from "./myReducers/app-reducer";
import { reducer as formReducer } from "redux-form";
import { createStore, applyMiddleware } from "redux";

// IMPORT REDUX FEATURES
const { combineReducers, compose } = require("redux");

// REDUCERS TO STATE
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  friendsPage: friendsReducer,
  newsPage: newsReducer,
  musicPage: musicReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
});

// CREATE STORE
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
