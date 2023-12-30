import React from "react";

import questionContainer from "../container/question.container";
import { fields } from "../description/question.description";
import DFormItem from "../shared/DFormItem";
import DStack from "../shared/DStack";
import { equal, ternary } from "../utils/javascript";

const Question = ({ value, onChange }) => {
  const { state, onFieldChange } = questionContainer(value, onChange);
  console.log("state", value, state);
  return (
    <DStack>
      {fields.map((field, index) =>
        ternary(
          !field.parentComponent ||
            field.visibleParentValues.some((value) =>
              equal(value, state.form[field.parentComponent])
            ),
          <DFormItem
            key={index}
            field={{
              ...field,
              value: state.form[field.name],
              error: state.errors[field.name],
            }}
            onChange={onFieldChange}
          />
        )
      )}
    </DStack>
  );
};

export default Question;
