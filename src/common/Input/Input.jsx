import React from 'react';
import { computeClassNames } from '../../utils';
import Classes from "./input.module.scss";

const Input = ({id, label, ...props}) => {
    return (
        <>
            <label 
                for={id}
                className={computeClassNames("d-block", Classes.label)}>
                {label}
            </label>
            <input {...props} id={id} />
        </>
    )
}
export default Input;