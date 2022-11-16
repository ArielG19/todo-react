//import logo from './logo.svg';
import './App.css';
import React from "react";
import { TodoContador} from "./components/TodoContador";
import {TodoBuscador} from "./components/TodoBuscador";
import { TodoLista } from './components/TodoLista';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CrearTodoBtn';


//App es el componente que estamos creando para utilizar luego
// props(propiedad) es el parametro que podemos colocar al componente.
const todos = [
  { text: 'Tarea numero 1', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Tarea numero 2', completed: false },
  { text: 'Tarea numero 3', completed: true },
];

function App(props) {
  return (
    <React.Fragment>
      <TodoContador/>
      <TodoBuscador/>
     
      <TodoLista>
        {todos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoLista>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
