import React from "react";

export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  return (
    // The `ButtonsContainer` prop is an HTML element or custom component that will wrap the buttons.
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
