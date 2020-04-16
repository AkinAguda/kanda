import React, { useContext } from 'react';
import { FormContext } from '../../context/FormContext';
import { setInputValue } from '../../actions/form';

const Form = (props) => {
    const { dispatch, ...values } = useContext(FormContext);
    return (
        <form>
            <section role="contentinfo" aria-label="Inputs for first and last names">
                <input 
                    type="text"
                    onChange={(e) => dispatch(setInputValue(e))}
                    value={values.firstName.value}
                    name="firstName"
                />
                <input 
                    type="text"
                    onChange={(e) => dispatch(setInputValue(e))}
                    value={values.lastName.value}
                    name="lastName"
                />
            </section>
            <input
                onChange={(e) => dispatch(setInputValue(e))}
                value={values.email.value}
                name="email"
                type="email"
            />
            <section role="contentinfo" aria-label="password inputs">
                <input 
                    type="password"
                    onChange={(e) => dispatch(setInputValue(e))}
                    value={values.password.value}
                    name="password"
                />
                <input 
                    type="text"
                    onChange={(e) => dispatch(setInputValue(e))}
                    value={values.confirmPassword.value}
                    name="confirmPassword"
                />
            </section>
            <button type="submit">submit</button>
        </form>
    )
}

export default Form;