import React from "react";

export default function Button({ children, ...props }) {
  return (
    <button
      className="button px-4 py-2 font-semibold uppercase rounded text-stone-900 bg-amber-400 hover:bg-violet-600"
      {...props}
    >
      {children}
    </button>
  );
}
