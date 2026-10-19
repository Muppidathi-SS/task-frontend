"use client";

import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export default function CustomCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(event) => setChecked(event.target.checked)}
      slotProps={{
        input: {
          "aria-label": "Select checkbox",
        },
      }}
      sx={{
        padding: 0,
        paddingRight: 1.5,
        color: "#000000",
        "&.Mui-checked": {
          color: "#000000",
        },
      }}
    />
  );
}
