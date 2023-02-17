import TaskCard from "./TaskCard";
import { useContext } from "react";// para guardar en un estado
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  //si coloco kas {} ya no coloco props en el resto
  //guardamos en un estado de react para ver el array
  // usestateSnippet para completar

  if (tasks.length === 0) {
    return <h1 className="text-gray-500 text-3xl font-bold text-center">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
