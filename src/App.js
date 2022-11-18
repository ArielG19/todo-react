//import logo from './logo.svg';
import './App.css';
import React from "react";
import { TodoContador} from "./components/TodoContador";
import {TodoBuscador} from "./components/TodoBuscador";
import { TodoLista } from './components/TodoLista';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CrearTodoBtn';

/*---------------- todos cargados por defecto-------------------*/
const defaultTodos = [
  { text: 'Tarea numero 1', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Tarea numero 2', completed: true },
  { text: 'Tarea numero 3', completed: true },
];


//App es el componente que estamos creando para utilizar luego
// props(propiedad) es el parametro que podemos colocar al componente.

function App(props) {

  
  /*----------------buscador todos-------------------*/
  //cargamos estados por defecto
  const [todos, setTodos] = React.useState(defaultTodos);

  //creamos nuestro estado para el componente(hijo) -> todoBuscador.
  const [searchValue, setSearchValue] = React.useState('');


  //creamos array vacio
  let searchedTodos = [];

  // Si el usuario hace una busqueda, si introduce un caracter
  if (searchValue.length >= 1) {
    //buscamos en los todos y almacenamos en el array vacio las coincidencias
    searchedTodos = todos.filter(todo => {
        // Convertir las tareas y la busqueda a minuscula
        const todoText = todo.text.toLowerCase();
        
        //alamcenamos el valor ingresado de busqueda y lo converimos a minuscula
        const searchtext = searchValue.toLowerCase();
  
      // Filtrar las tareas que coincidan con al busqueda
      return todoText.includes(searchtext);
    })
  } else {
    // Si no busca nada, mostras todas las tareas
    searchedTodos = todos;
  }


    /*----------------Contador de todos-------------------*/
    //Creamos propiedades para implementar en el componente y pasarle datos de componentes externos

    //Filtrando cada todo completed(true) y contandolos
    const completedTodos = todos.filter(todo => todo.completed === true).length;
    //contando los todos Existentes
    const totalTodos = todos.length;
  /*----------------Contador de todos-------------------*/



  return (
    <React.Fragment>
      <TodoContador completedProps={completedTodos} totalProps={totalTodos}/>
      <TodoBuscador
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
     
      <TodoLista>
        {searchedTodos.map(todo => (
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
