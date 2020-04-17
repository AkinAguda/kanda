import * as actionTypes from "../../actions/types";
import { setInputValue, handleValidation } from "./reduction";

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
    case actionTypes.VALIDATE_INPUTS:
      return handleValidation(state, action.payload);
    default:
      return state;
  }
};

export default formReducer;
