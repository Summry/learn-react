import React from "react";

export default function Home({ onBtnClick }) {
  return (
    <div>
      <img src="TO BE FILLED LATER" alt="Clipboard with a pen" />
      <h1 className="my-8 text-center text-5xl font-bold">
        No project selected.
      </h1>
      <button onClick={onBtnClick}>Create a Project</button>
    </div>
  );
}
