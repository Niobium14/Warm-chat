import messagesReduser from "./myRedusers/messages-reduser";
import profileReduser from "./myRedusers/profile-reduser";
 
const { createStore, combineReducers } = require("redux");

let redusers = combineReducers({
    profilePage: profileReduser,
    messagesPage: messagesReduser,
})

let store = createStore(redusers);
export default store;