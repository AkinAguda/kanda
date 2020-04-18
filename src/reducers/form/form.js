import * as actionTypes from "../../actions/types";
import { setInputValue, setErrors, validateInput } from "./reduction";

export const initialState = {
  values: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  errors: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  success: false,
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
    case actionTypes.SUCCESS:
      return { ...initialState, success: true };
    case actionTypes.SET_INPUTS_ERRORS:
      return setErrors(state, action.payload);
    case actionTypes.VALIDATE_INPUT:
      return validateInput(state, action.payload);
    default:
      return state;
  }
};

export default formReducer;
