import React from "react";
import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleClick() {
    setIsEditing((prev) => !prev);

    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }

  const playerNameInterface = isEditing ? (
    <input
      type="text"
      value={playerName}
      required
      onChange={handleNameChange}
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  let buttonCaption = isEditing ? "SAVE" : "EDIT";

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerNameInterface}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{buttonCaption}</button>
    </li>
  );
}
