//rfce atajo para crear funcion
//rafce funcion flecha
//imp para importar

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-gray-800 h-screen">
      <div className="container mx-auto bg-gray-200 p-10">
      <TaskForm />
      <TaskList />
    

      </div>
      </main>
  );
}

export default App;
