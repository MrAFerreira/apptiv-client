import React, { useState } from "react";
import Switch from "./Switch";

function Filter() {
  const [value, setValue] = useState(false);
  return (
    <div>
      <Switch
        isOn={value}
        onColor="#06D6A0"
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
}

export default Filter;
