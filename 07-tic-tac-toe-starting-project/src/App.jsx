import Player from "./components/Player/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name={"PLAYER 1"} symbol={"X"} />
          <Player name={"PLAYER 2"} symbol={"O"} />
        </ol>
        GAME BOARD
      </div>
      <div id="game-container">LOG</div>
    </main>
  );
}

export default App;
