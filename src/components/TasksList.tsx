import { useContext } from "react";
import Task from "../interfaces/Task";
import CreateTask from "./CreateTask";
import TaskCard from "./TaskCard";
import { TaskContext } from "../App";

const TasksList = ({ tasks }: { tasks: Task[] }) => {
  const { showCompleted } = useContext(TaskContext);

  return (
    <div className="grid grid-cols-4 gap-4">
      <CreateTask />
      {tasks
        .filter((t) => showCompleted || !t.completed)
        .sort((a, b) => a.due.getTime() - b.due.getTime())
        .map((t) => (
          <TaskCard task={t} key={t.id} />
        ))}
    </div>
  );
};

export default TasksList;
