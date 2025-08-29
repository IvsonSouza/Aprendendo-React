import React from "react";
import { CheckIcon, ChevronRight, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button.jsx";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-blue-50 dark:bg-slate-800 rounded-lg shadow flex flex-col">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2 items-center">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex-1 flex items-center gap-2 px-3 py-2 rounded-md transition-colors
              text-blue-900 dark:text-sky-200
              bg-slate-200 dark:bg-slate-700
              hover:bg-blue-100 dark:hover:bg-slate-600
              focus:outline-none
              ${task.isCompleted ? "line-through opacity-60" : ""}
              break-words whitespace-pre-line
            `}
            style={{ wordBreak: "break-word" }}
          >
            {task.isCompleted && (
              <CheckIcon
                className="text-blue-600 dark:text-sky-400"
                size={task.title && task.title.length > 30 ? 60 : 25}
              />
            )}
            <span className="break-words whitespace-pre-line text-white font-semibold">
              {task.title}
            </span>
          </button>
          <Button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-blue-700 dark:bg-sky-500 hover:bg-blue-800 dark:hover:bg-sky-600 text-white rounded-md p-2 transition-colors"
          >
            <ChevronRight />
          </Button>
          <Button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-red-500 hover:bg-red-600 text-white rounded-md p-2 transition-colors"
          >
            <Trash />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
