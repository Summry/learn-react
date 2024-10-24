import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState();
  const [title, setTitle] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setTitle(true);
  }

  return (
    <section id="player">
      <h2>Welcome {title ? playerName : "unknown entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
