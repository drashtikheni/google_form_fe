import { notEmptyOrNull, question, text } from "../utils/constant";

export const initialState = {
  form: {},
  errors: {},
  isLoading: false,
};

export const fields = [
  {
    name: "title",
    label: "Title",
    pattern: notEmptyOrNull,
    type: text,
  },
  {
    name: "description",
    label: "Description",
    pattern: notEmptyOrNull,
    type: text,
  },
  {
    name: "questions",
    pattern: question,
    type: question,
  },
];
