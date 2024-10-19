import React from "react";

export default function UserInput({ labelTitle, ...props }) {
  return (
    <div>
      <label htmlFor="">{labelTitle}</label>
      <input
        type="number"
        required
        min={0}
        defaultValue={0}
        inputMode="numeric"
      />
    </div>
  );
}
