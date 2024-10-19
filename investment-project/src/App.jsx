import Header from "./components/Header/Header";
import InputGroup from "./components/InputGroup/InputGroup";

const LABELS = {
  top: ["INITIAL INVESTMENT", "ANNUAL INVESTMENT"],
  bottom: ["EXPECTED RETURN", "DURATION"],
};

function App() {
  return (
    <>
      <Header />
      <main id="user-input">
        <InputGroup labels={LABELS.top} />
        <InputGroup labels={LABELS.bottom} />
      </main>
    </>
  );
}

export default App;
