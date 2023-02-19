import { createStore } from "redux";
import { appReducer } from "./dataReducer";

const store = createStore(appReducer);

export type RootState = ReturnType<typeof appReducer>;

export default store;