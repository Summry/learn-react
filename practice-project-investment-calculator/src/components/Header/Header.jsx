import React from "react";
import appLogo from "../../assets/investment-calculator-logo.png";
import "./Header.css";

export default function Header() {
  return (
    <header id="header">
      <img src={appLogo} alt="Logo of the app which is a bag full of coins." />
      <h1>Investment Calculator</h1>
    </header>
  );
}
