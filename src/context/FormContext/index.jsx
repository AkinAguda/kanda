import React, { createContext, useReducer } from "react";
import formReducer, { initialState } from "../../reducers/form/form";

export const FormContext = createContext({ ...initialState });

export const FormContextProvider = ({ children }) => {
  const [store, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormContext.Provider value={{ ...store, dispatch }}>
      {children}
    </FormContext.Provider>
  );
};
