import { useCallback, useEffect, useState } from "react";

import { initialState } from "../description/question.description";
import { EMPTY_VALUE } from "../utils/constant";
import { ternary } from "../utils/javascript";
import validateValue from "../utils/validation";

const questionContainer = (value, onChange) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (value) setState((state) => ({ ...state, form: value }));
  }, [JSON.stringify(value)]);

  const onFieldChange = useCallback((e, { pattern, name }) => {
    const { value } = e.target;
    const { isValid, message } = validateValue(pattern, value, name);

    setState((state) => ({
      ...state,
      form: { ...state.form, [name]: value },
      errors: {
        ...state.errors,
        [name]: ternary(!isValid, message, EMPTY_VALUE),
      },
    }));

    if (onChange) {
      onChange(state.form);
    }
  }, []);

  return { state, onFieldChange };
};

export default questionContainer;
