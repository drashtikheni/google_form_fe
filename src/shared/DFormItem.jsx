import { memo } from "react";

import Question from "../presentation/Question";
import { question, select, text } from "../utils/constant";
import { areEqualProps, ternary } from "../utils/javascript";
import DInput from "./DInput";
import DSelect from "./DSelect";
import DStack from "./DStack";

const DFormItem = ({ field, onChange }) => {
  console.log(field.error);
  const renderFormItem = () => {
    const items = {
      [text]: (
        <DInput
          label={field.label}
          name={field.name}
          value={field.value}
          error={ternary(field.error, true, false)}
          helperText={field.error}
          onChange={(e) => onChange(e, { ...field })}
        />
      ),
      [question]: (
        <Question
          value={field.value}
          onChange={(e) => onChange(e, { ...field })}
        />
      ),
      [select]: (
        <DSelect
          label={field.label}
          value={field.value}
          options={field.options}
          onChange={(e) => onChange(e, { ...field })}
        />
      ),
    };

    return items[field.type];
  };

  return <DStack m={2}>{renderFormItem()}</DStack>;
};

export default memo(DFormItem, areEqualProps);
