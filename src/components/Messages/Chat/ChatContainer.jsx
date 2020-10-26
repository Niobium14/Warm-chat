import { connect } from "react-redux";
import Chat from "./Chat";

let mapStateToProps= (state) => {
  return {
    messages: state.messagesPage.messages
  }
}
const ChatContainer = connect(mapStateToProps)(Chat);
export default ChatContainer;
