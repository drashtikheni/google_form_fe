import { Select } from "@mui/material";
import React from "react";

import DBox from "./DBox";
import DFormControl from "./DFormControl";
import DInputLabel from "./DInputLabel";
import DMenuItem from "./DMenuItem";

const DSelect = ({ value, options = [], onChange, label }) => {
  return (
    <>
      <DBox sx={{ minWidth: 120 }}>
        <DFormControl fullWidth>
          <DInputLabel>{label}</DInputLabel>
          <Select value={value} label={label} onChange={onChange}>
            {options.map((option) => (
              <DMenuItem value={option.value}>
                {option.label || option.value}
              </DMenuItem>
            ))}
          </Select>
        </DFormControl>
      </DBox>
    </>
  );
};

export default DSelect;
