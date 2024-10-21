import React, { useState } from "react";

export default function UserInput() {
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
        [inputIdentifier]: newDataValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userData.initialInvestment}
            inputMode="numeric"
            onChange={(event) =>
              handleChange(event.target.value, "initialInvestment")
            }
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userData.annualInvestment}
            inputMode="numeric"
            onChange={(event) =>
              handleChange(event.target.value, "annualInvestment")
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userData.expectedReturn}
            inputMode="numeric"
            onChange={(event) =>
              handleChange(event.target.value, "expectedReturn")
            }
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userData.duration}
            inputMode="numeric"
            onChange={(event) => handleChange(event.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
