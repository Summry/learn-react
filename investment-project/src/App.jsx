import { useState } from "react";
import Header from "./components/Header/Header";
import Result from "./components/Result/Result";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const [userData, setUserData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userData.duration > 0;

  function handleChange(newDataValue, inputIdentifier) {
    setUserData((prevData) => {
      return {
        ...prevData,
        [inputIdentifier]: +newDataValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userData={userData} onChange={handleChange} />
      {!inputIsValid && (
        <p className="center">
          Please enter an investment duration greater than zero.
        </p>
      )}
      {inputIsValid && <Result userData={userData} />}
    </>
  );
}

export default App;
