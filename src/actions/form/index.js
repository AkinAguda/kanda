import { reach } from "yup";
import * as actionTypes from "../../actions/types";
import { validationSchema, passwordSchema } from "../../utils";

/**
 * Validates inputs with yep and dispatches success or failure.
 * An action to display a loader can also be dispatched here
 * @param {Object} payload
 * @param {Function} dispatch
 */

export const validateInputs = (payload, dispatch) => {
  validationSchema
    .validate(payload, { abortEarly: false })
    .then(() => {
      dispatch({ type: actionTypes.SUCCESS });
    })
    .catch((error) => {
      dispatch({ type: actionTypes.SET_INPUTS_ERRORS, payload: error });
    });
};

/**
 * This function handles input change. It can optionally validate
 * an input onChange. the dependecy parameter exists because of inputs
 * that reply on extra information for validation. e.g confirmPassword
 * @param {Object} e
 * @param {Function} dispatch
 * @param {Object} errors
 * @param {Object} [dependency]
 */

export const handleChange = (e, dispatch, errors, dependency) => {
  const { name, value } = e.target;
  dispatch({
    type: actionTypes.SET_INPUT_VALUE,
    payload: { name, value },
  });
  if (errors[name]) {
    if (!dependency) {
      reach(validationSchema, name)
        .validate(value, {
          abortEarly: false,
        })
        .then(() => {
          dispatch({ type: actionTypes.VALIDATE_INPUT, payload: name });
        })
        .catch(() => {});
    } else {
      passwordSchema
        .validate({ [name]: value, ...dependency }, { abortEarly: false })
        .then(() => {
          dispatch({ type: actionTypes.VALIDATE_INPUT, payload: name });
        })
        .catch(() => {});
    }
  }
};
