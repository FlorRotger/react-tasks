import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

//lo ejecutamos
export const TaskContext = createContext(); // este almacena los datos

export function TaskContextProvider(props) {
  // este componente engloba al resto de componentes,, provider= provee a los otros
  const [tasks, setTasks] = useState([]); //arreglo de tarea

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length, //para q no se repita el id
        description: task.description,
      },
    ]);
    // copio todas las tareas y agrego la nueva tarea
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
