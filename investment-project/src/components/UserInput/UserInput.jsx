export default function UserInput({ onChange, userData }) {
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
              onChange(event.target.value, "initialInvestment")
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
              onChange(event.target.value, "annualInvestment")
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
            onChange={(event) => onChange(event.target.value, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userData.duration}
            inputMode="numeric"
            onChange={(event) => onChange(event.target.value, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
