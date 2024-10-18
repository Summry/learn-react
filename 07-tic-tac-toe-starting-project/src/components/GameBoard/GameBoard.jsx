import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  for (const turn of turns) {
    // deriving game board state from gameBoard state from 'App'
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  const gameBoardUI = gameBoard.map((row, rowIndex) => (
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
