import * as actionTypes from "../../actions/types";

/**
 * e in this case in the event object
 * @param {Object} e
 */

export const setInputValue = (e) => ({
  type: actionTypes.SET_INPUT_VALUE,
  payload: { name: e.target.name, value: e.target.value },
});

/**
 *
 * @param {Object} formValues
 */

export const validateInputs = (formValues) => ({
  type: actionTypes.VALIDATE_INPUTS,
  payload: formValues,
});
