import React, { useState } from "react";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";

const defaultInput = {
  initialInvestment: 15000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function App() {
  const [userData, setUserData] = useState(defaultInput);

  function handleUserDataChange(inputCategory, newValue) {
    setUserData((prevData) => {
      return {
        ...prevData,
        [inputCategory]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        initialUserInput={defaultInput}
        onInputChange={handleUserDataChange}
      />
      <section>table results</section>
    </>
  );
}
