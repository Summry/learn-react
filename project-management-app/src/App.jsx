import { useState } from "react";
import ProjectList from "./components/ProjectList/ProjectList";
import CreateProject from "./components/CreateProject/CreateProject";
import Home from "./components/Home/Home";

function App() {
  const [projectList, setProjectList] = useState([]);
  const [appState, setAppState] = useState({
    viewCreateProject: false,
    viewActiveProject: {
      active: false,
      projectDetails: {},
    },
  });

  function onNewProject() {
    setAppState((prevState) => {
      return {
        ...prevState,
        viewCreateProject: true,
      };
    });
  }

  function onCancelCreateNewProject() {
    setAppState({
      viewCreateProject: false,
      viewActiveProject: {
        active: false,
        projectDetails: {},
      },
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
      <ProjectList projectList={projectList} onNewProject={onNewProject} />

      {!appState.viewCreateProject && !appState.viewActiveProject.active && (
        <Home onNewProject={onNewProject} />
      )}

      {appState.viewCreateProject && (
        <CreateProject
          onCreateNewProject={onCreateNewProject}
          onCancel={onCancelCreateNewProject}
        />
      )}
    </main>
  );
}

export default App;
