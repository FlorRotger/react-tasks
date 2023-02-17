//formulario
import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  //guardamos el estado
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  //funcion q se ejecuta con el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, description);
    createTask({
      title,
      description,
    });
    //limpiamos valores
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4">
        <h1 className="text-3xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          //capturar evento
          onChange={(e) => setTitle(e.target.value)}
          value={title} // queda limpio en pantalla el formulario
          //para q el cursos parpadee cuando refresque la pagina
          className="bg-slate-50 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-50 p-3 w-full mb-2"
        />
        <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 px-3 py-1 text-white hover:bg-cyan-300 ">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
