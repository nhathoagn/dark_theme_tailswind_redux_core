import { GLOBALTYPES } from "./globalTypes";

export const themeAction = () => async (dispatch) => {
  dispatch({ type: GLOBALTYPES.THEME, payload: {} });
};
