import { useState } from "react";
import ProjectList from "./components/ProjectList/ProjectList";
import CreateProject from "./components/CreateProject/CreateProject";
import Home from "./components/Home/Home";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [projectState, setProjectState] = useState({
    createProject: false,
    activeProject: {
      active: false,
      projectDetails: {},
    },
  });

  function onNewProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        createProject: true,
      };
    });
  }

  function onCreateNewProject(formData) {
    // formData is obtained from CreateProject component form
    setProjectList((prevList) => {
      return [
        ...prevList,
        {
          title: formData.title,
          description: formData.description,
          dueDate: formData.dueDate,
        },
      ];
    });
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectList list={projectList} onNewProject={onNewProject} />
      {(!projectState.createProject || !projectState.activeProject.active) && (
        <Home onNewProject={onNewProject} />
      )}
      {projectList.createProject && (
        <CreateProject onCreateNewProject={onCreateNewProject} />
      )}
    </main>
  );
}

export default App;
