import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  addMessageActionCreator,
  dialogsType,
  messagesType,
} from "../../redux/myReducers/messages-reducer";
import { RootState } from "../../redux/redux-store";
import {
  getDialogs,
  getMessages,
} from "../../redux/selectors/messages-selector";
import Messages from "./Messages";

type mapStateToPropsType = {
  dialogs: Array<dialogsType>;
  messages: Array<messagesType>;
};

type mapDispatchToPropsType = {
  sentMessage: (newMessage: string) => void;
};
let mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    dialogs: getDialogs(state),
    messages: getMessages(state),
  };
};

let mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
  return {
    // DISPATCH ADD MESSAGE ACTION CREATOR
    sentMessage: (newMessage: string) => {
      dispatch(addMessageActionCreator(newMessage));
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export type PropsFromRedux = ConnectedProps<typeof connector>;

type PropsType = PropsFromRedux;

// REDIRECT AND CONNECT
export default compose(connector, withAuthRedirect)(Messages);
