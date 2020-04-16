import * as actionTypes from "../../actions/types";
import { setInputValue } from "./reduction";

export const initialState = {
  firstName: {
    value: "",
    error: { value: false, message: "" },
  },
  lastName: { value: "", error: { value: false, message: "" } },
  email: { value: "", error: { value: false, message: "" } },
  password: { value: "", error: { value: false, message: "" } },
  confirmPassword: { value: "", error: { value: false, message: "" } },
};

/**
 *
 * @param {*} state
 * @param {{ type: string, payload: * }} action
 */

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_VALUE:
      return setInputValue(state, action.payload);
    default:
      return state;
  }
};

export default formReducer;
