//import logo from './logo.svg';
import './App.css';
import React from "react";
import { TodoContador} from "./components/TodoContador";
import {TodoBuscador} from "./components/TodoBuscador";
import { TodoLista } from './components/TodoLista';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CrearTodoBtn';

const defaultTodos = [
  { text: 'Tarea numero 1', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Tarea numero 2', completed: true },
  { text: 'Tarea numero 3', completed: true },
];


//App es el componente que estamos creando para utilizar luego
// props(propiedad) es el parametro que podemos colocar al componente.

function App(props) {
  //cargamos estados por defecto
  const [todos, setTodos] = React.useState(defaultTodos);

  //creamos nuestro estado para el componente(hijo) -> todoBuscador.
  const [searchValue, setSearchValue] = React.useState('');

  //Filtrando cada todo completed(true) y contandolos
  const completedTodos = todos.filter(todo => todo.completed === true).length;
  //contando los todos Existentes
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoContador completedProps={completedTodos} totalProps={totalTodos}/>
      <TodoBuscador
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
     
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
