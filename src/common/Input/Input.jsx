import React from 'react';
import { computeClassName } from '../../utils';
import classes from "./input.module.scss";

const Input = ({id, label, className, ...props}) => {
    return (
        <div>
            <label 
                htmlFor={id}
                className={classes.label}>
                {label}
            </label>
            <input 
            {...props}
             id={id}
            className={computeClassName( "d-block", "form-control", className)}
              />
        </div>
    )
}
export default Input;