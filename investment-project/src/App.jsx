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
      <Result userData={userData} />
    </>
  );
}

export default App;
