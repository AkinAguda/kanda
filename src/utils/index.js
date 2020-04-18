import * as yup from "yup";
/**
 *
 * This function takes in an array of strings or a tuple where
 * the first element is a boolean that determines the condition
 * for a class to be added
 *
 * @param {Array.<string | [boolean, string]>} args
 * @returns {string}
 */

export const computeClassName = (...args) =>
  args.reduce((computedClass, currentClass) => {
    if (typeof currentClass === "string") {
      computedClass += ` ${currentClass}`;
    } else if (typeof currentClass === "object" && currentClass.length === 2) {
      if (currentClass[0]) {
        computedClass += ` ${currentClass[1]}`;
      }
    }
    return computedClass;
  });

export const passwordSchema = yup.object().shape({
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Password Confirmation is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const validationSchema = yup
  .object()
  .shape({
    firstName: yup.string().min(5).required("First Name is required"),
    lastName: yup.string().min(5).required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
  })
  .concat(passwordSchema);
