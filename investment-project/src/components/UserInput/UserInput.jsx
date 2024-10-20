import React, { useState } from "react";

export default function UserInput({ labelTitle: children }) {
  const [inputValue, setInputValue] = useState(0);

  function handleValueChange(event) {
    setInputValue(Number(event.target.value));
  }

  return (
    <div>
      <label>{children}</label>
      <input
        type="number"
        required
        min={0}
        value={inputValue}
        inputMode="numeric"
        onChange={handleValueChange}
      />
    </div>
  );
}
