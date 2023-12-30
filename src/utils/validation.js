import { canBeEmpty, notEmptyOrNull, question, text } from "./constant";
import {
  equal,
  firstCapAndSplit,
  isBool,
  isEmpty,
  length,
  lowerCase,
  lte,
} from "./javascript";
import { notEmpty } from "./regex";

const validateValue = (pattern, value, name) => {
  switch (pattern) {
    case canBeEmpty:
      return { isValid: true };

    case notEmptyOrNull:
      return {
        isValid: (notEmpty(value) && !isEmpty(value)) || isBool(value),
        message: `Please provide ${lowerCase(firstCapAndSplit(name))}`,
      };

    case question:
      return {
        isValid:
          notEmpty(value) &&
          notEmpty(value.title) &&
          notEmpty(value.type) &&
          !equal(value.type, text) &&
          lte(length(value.options)),
        message: `Please provide all required fields`,
      };

    default:
      return { isValid: false };
  }
};

export default validateValue;
