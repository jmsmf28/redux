import { SAVE_DATA } from "./actions";

export interface AppState {
  data: string;
}

const initialState: AppState = {
  data: "",
};

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

