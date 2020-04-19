import React, { useContext } from "react";
import { ReactComponent as ProfileSvg } from "../../svgs/id.svg";
import { ReactComponent as LockSvg } from "../../svgs/lock.svg";
import Input from "../../common/Input";
import { FormContext } from "../../context/FormContext";
import { validateInputs, handleChange } from "../../actions/form";
import { computeClassName } from "../../utils";
import classes from "./form.module.scss";

const Form = () => {
  const { dispatch, values, errors } = useContext(FormContext);
  return (
    <form>
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
          onChange={(e) => handleChange(e, dispatch, errors)}
          value={values.firstName}
          name="firstName"
          label="first name"
          error={errors.firstName}
          svg={ProfileSvg}
        />
        <Input
          type="text"
          onChange={(e) => handleChange(e, dispatch, errors)}
          value={values.lastName}
          name="lastName"
          label="last name"
          error={errors.lastName}
        />
      </section>
      <Input
        onChange={(e) => handleChange(e, dispatch, errors)}
        value={values.email}
        name="email"
        type="email"
        label="email"
        error={errors.email}
      />
      <section
        role="contentinfo"
        aria-label="password inputs"
        className={computeClassName("d-flex mb-3", classes.inputs)}
      >
        <Input
          type="password"
          onChange={(e) => handleChange(e, dispatch, errors)}
          value={values.password}
          name="password"
          label="password"
          error={errors.password}
          svg={LockSvg}
        />
        <Input
          type="password"
          onChange={(e) =>
            handleChange(e, dispatch, errors, { password: values.password })
          }
          value={values.confirmPassword}
          name="confirmPassword"
          label="confrim password"
          error={errors.confirmPassword}
          svg={LockSvg}
        />
      </section>
      <button
        type="submit"
        className={computeClassName("btn btn-primary mt-4", classes.submit)}
        onClick={(e) => {
          e.preventDefault();
          validateInputs({ ...values }, dispatch);
        }}
      >
        submit
      </button>
    </form>
  );
};

export default Form;
