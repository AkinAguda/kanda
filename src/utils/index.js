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

export const validationSchema = yup.object().shape({
  firstName: yup.string().max(16).min(5).required(),
  lastName: yup.string().max(16).min(5).required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
