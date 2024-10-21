import React from "react";
import { calculateInvestmentResults, formatter } from "../../util/investment";

export default function Result({ userData }) {
  const calculatedData = calculateInvestmentResults(userData);

  const initialInvestment =
    calculatedData[0].valueEndOfYear -
    calculatedData[0].interest -
    calculatedData[0].annualInvestment;

  const formattedResults = calculatedData.map((data) => {
    const totalInterestValue =
      data.valueEndOfYear -
      data.annualInvestment * data.year -
      initialInvestment;

    const totalCapitalInvested = data.valueEndOfYear - totalInterestValue;

    return (
      <tr key={data.year}>
        <td>{data.year}</td>
        <td>{formatter.format(data.valueEndOfYear)}</td>
        <td>{formatter.format(data.interest)}</td>
        <td>{formatter.format(totalInterestValue)}</td>
        <td>{formatter.format(totalCapitalInvested)}</td>
      </tr>
    );
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>{formattedResults}</tbody>
    </table>
  );
}
