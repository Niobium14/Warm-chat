import { connect } from "react-redux";
import { getUncos } from "../../../redux/selectors/news-selector";
import Uncos from "./Uncos";

let mapStateToProps = (state) => {
  return {
    uncos: getUncos(state),
  };
};
const UncosContainer = connect(mapStateToProps)(Uncos);
export default UncosContainer;
