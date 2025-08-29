import React, { useState } from "react";
import Input from "./Input.jsx";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-blue-50 dark:bg-slate-800 rounded-lg shadow flex flex-col">
      <div>
        <h2 className="text-2xl font-bold text-blue-900 dark:text-sky-300 mb-1">
          Adicionar Nova Tarefa
        </h2>
        <p className="text-blue-700 dark:text-sky-200 text-sm">
          Preencha os campos abaixo para criar uma nova tarefa.
        </p>
      </div>
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-blue-700 dark:bg-sky-500 hover:bg-blue-800 dark:hover:bg-sky-700 transition-colors text-white px-4 py-2 rounded-md font-bold cursor-pointer shadow"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
