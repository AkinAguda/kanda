/**
 *
 * This function takes in an array of strings or a tuple where
 * the first element is a boolean that determines the condition
 * for a class to be added
 *
 * @param {Array.<string | [boolean, string]>} args
 * @returns {string}
 */

export const computeClassNames = (...args) =>
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
