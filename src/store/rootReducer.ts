import { combineReducers } from "redux";
import catReducer from "../features/cats/catSlice";

const rootReducer = combineReducers({
  cats: catReducer,
});

export default rootReducer;
