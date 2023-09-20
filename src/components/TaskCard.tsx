import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Task from "../interfaces/Task";
import {
  faCheckCircle,
  faTrash,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { TaskContext } from "../App";

const TaskCard = ({ task }: { task: Task }) => {
  const { deleteTask, toggleCompletedTask } = useContext(TaskContext);

  return (
    <div
      className={`h-64 p-6 rounded-lg shadow border-gray-700 flex flex-col ${
        task.completed ? "bg-gray-950 hover:bg-gray-900" : "bg-gray-800 hover:bg-gray-700"
      }`}
    >
      <h5 className={`mb-2 text-2xl font-bold tracking-tight ${task.completed ? 'text-gray-500' : 'text-white'}`}>
        {task.name}
      </h5>
      <p className={`mb-2 text-xl tracking-tight  ${task.completed ? 'text-gray-600' : task.due.getTime() > (new Date()).getTime() ? 'text-gray-400' : 'text-red-400'}`}>
        {task.due.toLocaleDateString()}
      </p>
      <div className="flex-1" />
      <div className="justify-between flex">
        <button onClick={() => deleteTask(task.id)}>
          <FontAwesomeIcon icon={faTrash} color="#c30101" size="lg" />
        </button>
        <button onClick={() => toggleCompletedTask(task.id)}>
          {task.completed ? (
            <FontAwesomeIcon icon={faXmarkCircle} color="#c30101" size="lg" />
          ) : (
            <FontAwesomeIcon icon={faCheckCircle} color="#1852a7" size="lg" />
          )}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
