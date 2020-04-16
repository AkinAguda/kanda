export const setInputValue = (state, payload) => {
  const { name, value } = payload;
  return { ...state, [name]: { ...state[name], value } };
};
