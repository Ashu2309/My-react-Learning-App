import changeNum from "./IncDecRed";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  amount: changeNum,
});

export default rootReducer;
