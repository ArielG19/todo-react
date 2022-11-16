//import logo from './logo.svg';
import './App.css';
import React from "react";
import { TodoContador} from "./components/TodoContador";
import {TodoBuscador} from "./components/TodoBuscador";
import { TodoLista } from './components/TodoLista';
import { TodoItem } from './components/TodoItem';
//import { CrearTodoBtn } from './components/CrearTodoBtn';


//App es el componente que estamos creando para utilizar luego
// props(propiedad) es el parametro que podemos colocar al componente.

const todos = [
  {
    text:'Soy una tarea 1',
    completada: false
  },
  {
    text:'Soy una tarea 2',
    completada: false
  },
  {
    text:'Soy una tarea 3',
    completada: false
  }
]

function App(props) {
  return (
    <React.Fragment>
      <TodoContador/>
      <TodoBuscador/>
      <TodoLista>
        {todos.map(todo => (<TodoItem key={todo.text} text={todo.text} />) )}
      </TodoLista>
    </React.Fragment>
  );
}

export default App;
