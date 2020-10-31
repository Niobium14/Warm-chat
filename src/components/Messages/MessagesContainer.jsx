import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Messages from "./Messages";

let mapStateToProps = (state) => {
  return {
    dialogs: state.messagesPage.dialogs,
    messages: state.messagesPage.messages,
  };
};

// REDIRECT AND CONNECT
export default compose(connect(mapStateToProps), withAuthRedirect)(Messages);
