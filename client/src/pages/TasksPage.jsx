import { useEffect } from "react";
import { useTask } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const { getTasks, tasks } = useTask();
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

export default TasksPage;
