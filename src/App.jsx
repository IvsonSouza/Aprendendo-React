import React, { useState } from "react";
import AddTask from "./components/AddTask.jsx";
import Tasks from "./components/Tasks.jsx";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar inglês",
      description: "Estudar gramática",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar matemática",
      description: "Estudar álgebra",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Estudar história",
      description: "Estudar história do Brasil",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Estudar geografia",
      description: "Estudar geografia do Brasil",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
