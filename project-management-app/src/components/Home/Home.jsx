import appLogo from "../../assets/no-projects.png";

export default function Home({ onNewProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={appLogo}
        alt="Clipboard with a pen"
        className="w-16 h-16 object-contain mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-stone-700 mb-4">
        No project selected
      </h2>
      <p className="text-stone-600 mb-7">
        Select a project or get started with a new one
      </p>
      <button
        onClick={onNewProject}
        className="px-6 py-2 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-950"
      >
        Create new Project
      </button>
    </div>
  );
}
