import React from "react";

export default function Log({ turns }) {
  const mappedTurns = turns.map((turn) => (
    <li key={`${turn.square.row}${turn.square.col}`}>
      {turn.player} selected {turn.square.row}, {turn.square.col}
    </li>
  ));

  return <ol id="log">{mappedTurns}</ol>;
}
