import React, { useContext } from "react";
import { computeClassName } from "../../utils";
import { FormContext } from "../../context/FormContext";
import Form from "./Form";
import classes from "./form.module.scss";

const FormContainer = () => {
  const { success } = useContext(FormContext);
  return (
    <main className={classes.main}>
      <div
        className={computeClassName(
          "shadow-sm p-4 mb-5 mt-5 bg-white rounded",
          classes.form
        )}
      >
        {success ? <h1 className="text-center">Thank you!</h1> : <Form />}
      </div>
    </main>
  );
};

export default FormContainer;
