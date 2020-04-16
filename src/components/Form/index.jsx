import React, { useContext } from 'react';
import Input from '../../common/Input';
import { FormContext } from '../../context/FormContext';
import { setInputValue } from '../../actions/form';

const Form = (props) => {
    const { dispatch, ...values } = useContext(FormContext);
    return (
        <form>
            <section role="contentinfo" aria-label="Inputs for first and last names">
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
            />
            <section role="contentinfo" aria-label="password inputs">
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
            <button type="submit" className="btn btn-primary">submit</button>
        </form>
    )
}

export default Form;