import React from "react";

import formContainer from "../container/form.container";
import { fields } from "../description/form.description";
import DButton from "../shared/DButton";
import DFormItem from "../shared/DFormItem";
import DStack from "../shared/DStack";
import { values } from "../utils/javascript";

const Form = () => {
  const { state, onFieldChange, onSubmit } = formContainer();

  return (
    <DStack width={300}>
      {fields.map((field, index) => (
        <DFormItem
          key={index}
          field={{
            ...field,
            value: state.form[field.name],
            error: state.errors[field.name],
          }}
          onChange={onFieldChange}
        />
      ))}
      <DButton
        variant="contained"
        sx={{ width: 200 }}
        disabled={
          values(state.errors).some((value) => value) || state.isLoading
        }
        onClick={onSubmit}
      >
        Submit
      </DButton>
    </DStack>
  );
};

export default Form;
