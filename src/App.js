import React from "react";
import { AppUI } from "./components/AppUI";
import { TodoProvider } from "./componentContext/appContext";



/*---------------- todos cargados por defecto-------------------*/
/*const defaultTodos = [
  { text: 'Tarea numero 1', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Tarea numero 2', completed: true },
  { text: 'Tarea numero 3', completed: true },
];*/


//App es el componente que estamos creando para utilizar luego
// props(propiedad) es el parametro que podemos colocar al componente.

function App() {

  return (
    //Llamamos a nuestro context provider
    <TodoProvider>
        <AppUI/>
    </TodoProvider>
    
  );
}

export default App;
