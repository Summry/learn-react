import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import UserInput from "./components/UserInput/UserInput";

const LABELS = {
  top: ["INITIAL INVESTMENT", "ANNUAL INVESTMENT"],
  bottom: ["EXPECTED RETURN", "DURATION"],
};

function App() {
  const [results, setResults] = useState([
    {
      year: 1,
      investmentValue: 1000,
      interestYear: 5,
      totalInterest: 8,
      investedCapital: 1000,
    },
    {
      year: 2,
      investmentValue: 2000,
      interestYear: 6,
      totalInterest: 13,
      investedCapital: 2000,
    },
  ]);

  return (
    <>
      <Header />
      <UserInput />
      <Result results={results}>some list of calculations</Result>
    </>
  );
}

export default App;
