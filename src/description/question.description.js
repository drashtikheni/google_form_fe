import { notEmptyOrNull, select, text } from "../utils/constant";

export const initialState = {
  form: {},
  errors: {},
};

export const answerTypes = [
  { value: "text", label: "Text" },
  { value: "radio", label: "Radio" },
  { value: "checkbox", label: "Checkbox" },
  { value: "select", label: "Select" },
];

export const fields = [
  {
    name: "title",
    label: "Title",
    pattern: notEmptyOrNull,
    type: text,
  },
  {
    name: "type",
    label: "Type",
    pattern: notEmptyOrNull,
    type: select,
    options: answerTypes,
    childComponents: [],
  },
  {
    name: "type",
    label: "Type",
    pattern: notEmptyOrNull,
    type: text,
    options: answerTypes,
    parentComponent: "type",
    visibleParentValues: ["radio", "checkbox", "select"],
  },
];
