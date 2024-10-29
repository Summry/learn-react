import { useState } from "react";
import ProjectList from "./components/ProjectList/ProjectList";
import CreateProject from "./components/CreateProject/CreateProject";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [activeProject, setActiveProject] = useState({}); // used to open or switch between projects from the project list

  return (
    <>
      <ProjectList list={projectList} />
      <CreateProject />
      <h1 className="my-8 text-center text-5xl font-bold">
        No Project Selected
      </h1>
    </>
  );
}

export default App;
