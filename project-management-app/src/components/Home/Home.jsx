import React from "react";
import appLogo from "../../assets/no-projects.png";

export default function Home({ onNewProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={appLogo}
        alt="Clipboard with a pen"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-700 mb-4">
        No project selected
      </h2>
      <p className="text-stone-600 mb-4">
        Select a project or get started with a new one
      </p>
      <button onClick={onNewProject}>Create a Project</button>
    </div>
  );
}
