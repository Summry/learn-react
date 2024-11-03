import React from "react";

export default function ProjectList({ projectList, onNewProject }) {
  const projectListContent = projectList.map((project) => {
    return (
      <li key={project.title} className="flex justify-between my-4">
        <p>{project.title}</p>
      </li>
    );
  });

  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h1>
      <button
        className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
        onClick={onNewProject}
      >
        + Add Projects
      </button>
      {projectList.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {projectListContent}
        </ul>
      )}
    </aside>
  );
}
