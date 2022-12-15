import { GLOBALTYPES } from "../actions/globalTypes";
const initialState = {
  dark: false,
};
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GLOBALTYPES.THEME:
      console.log("stateReducer", state);
      return !state;
    default:
      return state;
  }
};
export default themeReducer;
