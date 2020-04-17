import React, { useContext } from "react";
import Input from "../../common/Input";
import { FormContext } from "../../context/FormContext";
import { setInputValue } from "../../actions/form";
import { computeClassName } from "../../utils";
import classes from "./form.module.scss";

const Form = () => {
  const { dispatch, ...values } = useContext(FormContext);
  return (
    <form
      className={computeClassName(
        "shadow-sm p-4 mb-5 mt-5 bg-white rounded",
        classes.form
      )}
    >
      <h2 className={computeClassName("mb-5 bt-0", classes.header)}>
        Kanda Exam
      </h2>
      <section
        role="contentinfo"
        aria-label="Inputs for first and last names"
        className={computeClassName("d-flex mb-3", classes.inputs)}
      >
        <Input
          type="text"
          onChange={(e) => dispatch(setInputValue(e))}
          value={values.firstName.value}
          name="firstName"
          label="first name"
        />
        <Input
          type="text"
          onChange={(e) => dispatch(setInputValue(e))}
          value={values.lastName.value}
          name="lastName"
          label="last name"
        />
      </section>
      <Input
        onChange={(e) => dispatch(setInputValue(e))}
        value={values.email.value}
        name="email"
        type="email"
        label="email"
        className="mb-3"
      />
      <section
        role="contentinfo"
        aria-label="password inputs"
        className={computeClassName("d-flex mb-3", classes.inputs)}
      >
        <Input
          type="password"
          onChange={(e) => dispatch(setInputValue(e))}
          value={values.password.value}
          name="password"
          label="password"
        />
        <Input
          type="password"
          onChange={(e) => dispatch(setInputValue(e))}
          value={values.confirmPassword.value}
          name="confirmPassword"
          label="confrim password"
        />
      </section>
      <button
        type="submit"
        className={computeClassName("btn btn-primary mt-4", classes.submit)}
      >
        submit
      </button>
    </form>
  );
};

export default Form;
