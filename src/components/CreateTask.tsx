import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const CreateTask = () => {
  const { addTask } = useContext(TaskContext);

  const [name, setName] = useState("");
  const [due, setDue] = useState("");

  useEffect(() => {
    const [year, month, day] = due.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    console.log("due", due, new Date(due), dateObj);
  }, [due]);

  const handleSave = () => {
    if (!name || !due) return;
    const [year, month, day] = due.split("-").map(Number);
    addTask({
      name,
      due: new Date(year, month - 1, day),
    });
  };

  return (
    <div className="flex h-64 p-6 rounded-lg shadow bg-gray-800 border-gray-700 flex-col">
      <input
        className="appearance-none rounded w-full py-2 px-3 text-white bg-gray-500 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300 mb-4"
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <input
        type="date"
        placeholder="Due Date"
        value={due}
        onChange={(e) => setDue(e.currentTarget.value)}
        className="appearance-none rounded w-full py-2 px-3 text-white bg-gray-500 leading-tight focus:outline-none focus:shadow-outline placeholder:text-gray-300 mb-4"
      />
      <div className="flex-1" />
      <div className="justify-end flex">
        <button onClick={handleSave}>
          <FontAwesomeIcon icon={faPaperPlane} color="#1852a7" size="lg" />
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
