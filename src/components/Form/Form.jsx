import React, { useContext } from "react";
import Input from "../../common/Input";
import { FormContext } from "../../context/FormContext";
import { setInputValue, validateInputs } from "../../actions/form";
import { computeClassName } from "../../utils";
import classes from "./form.module.scss";

const Form = () => {
  const { dispatch, values, errors } = useContext(FormContext);
  console.log(errors);
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
          value={values.firstName}
          name="firstName"
          label="first name"
          error={errors.firstName}
        />
        <Input
          type="text"
          onChange={(e) => dispatch(setInputValue(e))}
          value={values.lastName}
          name="lastName"
          label="last name"
          error={errors.lastName}
        />
      </section>
      <Input
        onChange={(e) => dispatch(setInputValue(e))}
        value={values.email}
        name="email"
        type="email"
        label="email"
        className="mb-3"
        error={errors.email}
      />
      <section
        role="contentinfo"
        aria-label="password inputs"
        className={computeClassName("d-flex mb-3", classes.inputs)}
      >
        <Input
          type="password"
          onChange={(e) => dispatch(setInputValue(e))}
          value={values.password}
          name="password"
          label="password"
          error={errors.password}
        />
        <Input
          type="password"
          onChange={(e) => dispatch(setInputValue(e))}
          value={values.confirmPassword}
          name="confirmPassword"
          label="confrim password"
          error={errors.confirmPassword}
        />
      </section>
      <button
        type="submit"
        className={computeClassName("btn btn-primary mt-4", classes.submit)}
        onClick={(e) => {
          e.preventDefault();
          dispatch(validateInputs({ ...values, dispatch }));
        }}
      >
        submit
      </button>
    </form>
  );
};

export default Form;
