import { BOOLEAN, OBJECT, STRING } from "./constant";
import { firstLetterCap } from "./regex";

export const ternary = (bool, truthy, falsy) => (bool ? truthy : falsy);

export const equal = (obj1, obj2) => obj1 === obj2;

export const checkUndefined = (obj) => equal(obj, undefined);

export const head = (obj) => obj?.[0];

export const last = (obj) => obj?.[length(obj) - 1];

export const length = (obj) => obj?.length;

export const entries = (obj) => (obj ? Object.entries(obj) : []);

export const values = (object) => (object ? Object.values(object) : []);

export const keys = (object) => (object ? Object.keys(object) : []);

export const splitCamelCase = (obj) =>
  obj?.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

export const firstCapAndSplit = (key) => firstLetterCap(splitCamelCase(key));

export const isEmpty = (value) => {
  if (typeOf(value, STRING) && isEmptyString(value)) return true;
  if (typeOf(value, OBJECT) && lte(length(keys(value)), 0)) return true;
  if (!value) return true;
  return false;
};

export const isEmptyString = (value) =>
  equal(value, "") || checkUndefined(value) || equal(value, null);

export const lowerCase = (value) => value?.toLowerCase();

export const isArray = (obj) => Array.isArray(obj);

export const checkStringValue = (obj) =>
  !checkUndefined(obj) &&
  !equal(obj, "undefined") &&
  !equal(obj, "null") &&
  !equal(obj, null);

export const isBool = (value) => typeOf(value, BOOLEAN);

export const notNull = (value) => !equal(value, null);

export const checkIncludes = (value, array) => array.includes(value);

export const typeOf = (val, type) => equal(typeof val, type);

export const gt = (param1, param2 = 0) => param1 > param2;

export const lt = (param1, param2 = 0) => param1 < param2;

export const gte = (param1, param2 = 0) => param1 >= param2;

export const lte = (param1, param2 = 0) => param1 <= param2;

export const upperCase = (value) => value?.toUpperCase();

export const indexOf = (string, val) => string?.indexOf(val);

export const areEqualProps = (prev, next) =>
  equal(JSON.stringify(prev), JSON.stringify(next));
