import React, { useState } from "react";

export default function CreateProject({ onCancel, onCreateNewProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
  });
  // const titleRef = useRef();
  // const descriptionRef = useRef();
  // const dateRef = useRef();

  function onFormDataChange(dataValue, dataType) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [dataType]: dataValue,
      };
    });
  }

  const todaysDate = new Date().toISOString().split("T")[0];

  return (
    <section className="mt-16 w-[35rem]">
      <form
        // onSubmit={() => onCreateNewProject(formData)}
        className="mt-4 text-right"
      >
        <button
          className="text-stone-700 hover:text-red-500"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          onClick={() => onCreateNewProject(formData)}
          className="ml-4 px-6 py-2 rounded-md bg-stone-800 text-stone-300 hover:bg-stone-950"
        >
          Save
        </button>
      </form>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          title
        </label>
        <input
          onChange={(e) => onFormDataChange(e.target.value, "title")}
          // ref={titleRef}
          required
          value={formData.title}
          type="text"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label required className="text-sm font-bold uppercase text-stone-500">
          description
        </label>
        <input
          onChange={(e) => onFormDataChange(e.target.value, "description")}
          required
          value={formData.description}
          type="text"
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
      <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">
          due date
        </label>
        <input
          onChange={(e) => onFormDataChange(e.target.value, "dueDate")}
          required
          value={formData.dueDate}
          type="date"
          min={todaysDate}
          className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
        />
      </p>
    </section>
  );
}
