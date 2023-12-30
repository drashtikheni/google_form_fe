import { useCallback, useState } from "react";

import { fields, initialState } from "../description/form.description";
import { useToast } from "../hooks/useToast";
import { api } from "../utils/api";
import { FORMS, POST } from "../utils/apiPath";
import { EMPTY_VALUE } from "../utils/constant";
import { ternary } from "../utils/javascript";
import { formCreated, somethingWentWrong } from "../utils/messages";
import validateValue from "../utils/validation";

const formContainer = () => {
  const [state, setState] = useState(initialState);
  const { successMsg, errorMsg } = useToast();

  const onFieldChange = useCallback((e, { pattern, name }) => {
    const value = ternary(e.target, e.target?.value, e);
    console.log(value);
    const { isValid, message } = validateValue(pattern, value, name);

    setState((state) => ({
      ...state,
      form: { ...state.form, [name]: value },
      errors: {
        ...state.errors,
        [name]: ternary(!isValid, message, EMPTY_VALUE),
      },
    }));
  }, []);

  const formValidity = useCallback(() => {
    let isValidForm = true;

    fields.forEach((field) => {
      const { isValid, message } = validateValue(
        field.pattern,
        state.form?.[field.name],
        field.name
      );

      if (!isValid) isValidForm = false;

      setState((state) => ({
        ...state,
        form: { ...state.form, [field.name]: state.form?.[field.name] },
        errors: {
          ...state.errors,
          [field.name]: ternary(!isValid, message, EMPTY_VALUE),
        },
      }));
    });

    return isValidForm;
  }, [JSON.stringify(state.form)]);

  const onSubmit = useCallback(
    async (e) => {
      e.stopPropagation();
      e.preventDefault();

      const isValidForm = formValidity();
      if (!isValidForm) return;

      setState((state) => ({ ...state, isLoading: true }));
      const res = await api(POST, FORMS, true, state.form);
      if (res?.status) {
        successMsg(formCreated);
      } else errorMsg(res?.err?.message || somethingWentWrong);
      setState((state) => ({ ...state, isLoading: true }));
    },
    [formValidity]
  );

  return { state, onFieldChange, onSubmit };
};

export default formContainer;
