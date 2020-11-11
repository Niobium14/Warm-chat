import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from "../../redux/myReducers/messages-reducer";
import {
  getDialogs,
  getMessages,
} from "../../redux/selectors/messages-selector";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    dialogs: getDialogs(state),
    messages: getMessages(state),
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    // DISPATCH ADD MESSAGE ACTION CREATOR
    sentMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    },
  };
};

// REDIRECT AND CONNECT
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Messages);
