import Player from "./components/Player/Player";
import GameBoard from "./components/GameBoard/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName={"PLAYER 1"} symbol={"X"} />
          <Player initialName={"PLAYER 2"} symbol={"O"} />
        </ol>
        <GameBoard />
      </div>
      <div id="game-container">LOG</div>
    </main>
  );
}

export default App;
