import React from "react";
import Accordion from "../Accordion";
import { computeClassName } from "../../utils";
import classes from "./input.module.scss";

const Input = ({ id, label, className, error, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <Accordion open={!!error}>
        <p className="mb-1 text-danger">{error}</p>
      </Accordion>
      <input
        {...props}
        id={id}
        className={computeClassName("d-block", "form-control", className)}
      />
    </div>
  );
};
export default Input;
