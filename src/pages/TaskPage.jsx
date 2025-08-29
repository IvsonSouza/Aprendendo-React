import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title.jsx";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-slate-800 flex justify-center items-start p-2">
      <div className="w-full max-w-md mx-auto space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-blue-700 dark:text-sky-300 hover:text-blue-900 dark:hover:text-sky-100 transition-colors"
            title="Voltar"
          >
            <ChevronLeft />
          </button>
          <Title>
            <span className="text-blue-900 dark:text-sky-300">
              Detalhes da Tarefa
            </span>
          </Title>
        </div>
        <div className="bg-slate-200 dark:bg-slate-700 p-4 rounded-lg shadow">
          <h2
            className="text-xl font-bold text-blue-400 dark:text-sky-400 pb-1 break-words whitespace-pre-line"
            style={{ wordBreak: "break-word" }}
          >
            {title}
          </h2>
          <p
            className="text-white break-words whitespace-pre-line"
            style={{ wordBreak: "break-word" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
