import React from "react";
import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing(!isEditing);
  }

  const playerName = isEditing ? (
    <input type="text" value={name} required />
  ) : (
    <span className="player-name">{name}</span>
  );

  let buttonCaption = isEditing ? "SAVE" : "EDIT";

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonCaption}</button>
    </li>
  );
}
