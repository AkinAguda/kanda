import React from "react";
import Accordion from "../Accordion";
import { computeClassName } from "../../utils";
import classes from "./input.module.scss";

const Input = ({ id, label, className, error, svg: Svg, ...props }) => {
  return (
    <div>
      <label htmlFor={id} className={classes.label}>
        {label}
      </label>
      <Accordion open={!!error}>
        <p className="mb-1 text-danger">{error}</p>
      </Accordion>
      <div
        className={computeClassName("input-group", classes.inputGroup)}
        style={{ height: "100%" }}
      >
        <input
          {...props}
          id={id}
          className={computeClassName("d-block", "form-control", className)}
        />
        {Svg && (
          <div className={classes.inputIcon}>
            <Svg className="input-group-append" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Input;
