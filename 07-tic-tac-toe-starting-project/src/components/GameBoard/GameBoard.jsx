import React from "react";

export default function GameBoard({ onSelectSquare, board }) {
  const gameBoardUI = board.map((row, rowIndex) => (
    <li key={rowIndex}>
      <ol>
        {row.map((playerSymbol, colIndex) => (
          <li key={colIndex}>
            <button
              onClick={() => onSelectSquare(rowIndex, colIndex)}
              disabled={playerSymbol && true}
            >
              {playerSymbol}
            </button>
          </li>
        ))}
      </ol>
    </li>
  ));

  return <ol id="game-board">{gameBoardUI}</ol>;
}
