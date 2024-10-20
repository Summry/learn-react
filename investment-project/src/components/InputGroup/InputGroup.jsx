import React from "react";
import UserInput from "../UserInput/UserInput";

export default function InputGroup({ labels }) {
  return (
    <div className="input-group">
      <UserInput>{labels[0]}</UserInput>
      <UserInput>{labels[1]}</UserInput>
    </div>
  );
}
