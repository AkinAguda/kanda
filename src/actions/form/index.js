import * as actionTypes from "../../actions/types";

export const setInputValue = (e) => ({
  type: actionTypes.SET_INPUT_VALUE,
  payload: { name: e.target.name, value: e.target.value },
});
