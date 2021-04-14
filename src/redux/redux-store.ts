import thunk from "redux-thunk";
import authReducer from "./myReducers/auth-reducer";
import profileReducer from "./myReducers/profile-reducer";
import messagesReducer from "./myReducers/messages-reducer";
import friendsReducer from "./myReducers/friends-reducer";
import newsReducer from "./myReducers/news-reducer";
import musicReducer from "./myReducers/music-reducer";
import appReducer from "./myReducers/app-reducer";
import { reducer as formReducer } from "redux-form";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";

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
  app: appReducer,
  form: formReducer,
});

type reducersType = typeof combineReducers;
export type RootState = ReturnType<reducersType>;
// CREATE STORE
let store = createStore(reducers, applyMiddleware(thunk));
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// ACTIONS CREATORS TYPES
type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;
export type InferActionsTypes<
  T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>;

// THUNK TYPE
export type BaseThunkType<A extends Action> = ThunkAction<void, RootState, unknown, A>;

export default store;
