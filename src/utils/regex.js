import { ternary } from "./javascript";

export const notEmpty = (val) => {
  const regex = /[^\s]$/;
  return ternary(val, regex.test(val), false);
};

export const firstLetterCap = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};
