import React from "react";

const results = [];

export default function Result({ results }) {
  const formattedResults = results
    ? results.map((result) => (
        <tr>
          <td>{result.year}</td>
          <td>{result.investmentValue}</td>
          <td>{result.interestYear}</td>
          <td>{result.totalInterest}</td>
          <td>{result.investedCapital}</td>
        </tr>
      ))
    : null;

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
