/**
 * This function sets all the errors to be displayed
 * when input validation occurs
 * @param {Object} state
 * @param {Object} payload
 */

export const setErrors = (state, payload) => {
  let newState = { ...state };
  payload.inner.forEach((error) => {
    newState.errors[error.path] = error.message;
  });
  return newState;
};

export const validateInput = (state, payload) => {
  let newState = { ...state };
  newState.errors[payload] = "";
  return newState;
};

export const setInputValue = (state, payload) => {
  const { name, value } = payload;
  return { ...state, values: { ...state.values, [name]: value } };
};
