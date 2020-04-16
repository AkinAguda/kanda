import React, { createContext, useReducer } from 'react';
import formReducer, {initialState} from  '../../reducers/form/form';

export const FormContext = createContext({...initialState});

export const FormContextProvider = ({children}) => {
    const [values, dispatch] = useReducer(formReducer, initialState);
    return (
        <FormContext.Provider value={{...values, dispatch}} >
            {children}
        </FormContext.Provider>
    )
}