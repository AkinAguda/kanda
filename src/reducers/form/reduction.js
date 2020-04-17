import { validationSchema } from "../../utils";

/**
 *
 * @param {Object} state
 * @param {Object} payload
 */

export const setErrors = (state, payload) => {
  let newState = { ...state };
  for (let i = 0; i < payload.inner.length; i++) {
    newState.errors[payload.inner[i].path] = payload.inner[i].message;
  }
  return newState;
};

/**
 *
 * @param {Object} state
 * @param {Object} payload
 */

export const setInputValue = (state, payload) => {
  const { name, value } = payload;
  return { ...state, values: { ...state.values, [name]: value } };
};

/**
 *
 * @param {Object} state
 * @param {Object} payload
 */

export const handleValidation = (state, { dispatch, ...payload }) => {
  try {
    validationSchema.validateSync(payload, { abortEarly: false });
  } catch (error) {
    return setErrors(state, error);
  }
  return { ...state };
};
