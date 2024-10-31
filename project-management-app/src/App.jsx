import { useState } from "react";
import ProjectList from "./components/ProjectList/ProjectList";
import CreateProject from "./components/CreateProject/CreateProject";
import Home from "./components/Home/Home";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [createProject, setCreateProject] = useState(false);
  const [activeProject, setActiveProject] = useState({}); // used to open or switch between projects from the project list

  function onBtnClick() {
    setCreateProject(true);
  }

  return (
    <>
      <ProjectList list={projectList} />
      {(!createProject || !activeProject) && <Home onBtnClick={onBtnClick} />}
      {createProject && <CreateProject />}
      <h1 className="my-8 text-center text-5xl font-bold">
        No Project Selected
      </h1>
    </>
  );
}

export default App;
