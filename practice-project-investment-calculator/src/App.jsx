import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import Results from "./components/Results/Results";

const defaultInput = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [userData, setUserData] = useState(defaultInput);

  const isInputValid = userData.duration > 0;

  function handleUserDataChange(inputCategory, newValue) {
    setUserData((prevData) => {
      return {
        ...prevData,
        [inputCategory]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        initialUserInput={userData}
        onInputChange={handleUserDataChange}
      />
      {!isInputValid && (
        <p className="center">Please input a proper duration!</p>
      )}
      {isInputValid && <Results userData={userData} />}
    </>
  );
}
