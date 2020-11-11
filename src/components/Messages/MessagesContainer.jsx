import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessageActionCreator } from "../../redux/myReducers/messages-reducer";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
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
