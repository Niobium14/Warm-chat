import { connect } from "react-redux";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
  };
};

const MessagesContainer = connect(mapStateToProps)(Messages);

export default MessagesContainer;
