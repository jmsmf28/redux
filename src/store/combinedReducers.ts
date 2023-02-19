import { combineReducers } from "redux";
import {appReducer} from "./dataReducer";

const rootReducer = combineReducers({
  data: appReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;