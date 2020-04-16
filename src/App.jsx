import React from "react";
import Form from './components/Form';
import { FormContextProvider } from './context/FormContext'

const App = () => {
  return (
      <FormContextProvider>
        <Form />
      </FormContextProvider>
      ) 
}

export default App;
