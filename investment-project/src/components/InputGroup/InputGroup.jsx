import React from "react";
import UserInput from "../UserInput/UserInput";

export default function InputGroup({ labels }) {
  return (
    <div className="input-group">
      <UserInput labelTitle={labels[0]} />
      <UserInput labelTitle={labels[1]} />
    </div>
  );
}
