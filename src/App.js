import React from "react";
import { AppUI } from "./components/AppUI";



/*---------------- todos cargados por defecto-------------------*/
/*const defaultTodos = [
  { text: 'Tarea numero 1', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Tarea numero 2', completed: true },
  { text: 'Tarea numero 3', completed: true },
];*/


//App es el componente que estamos creando para utilizar luego
// props(propiedad) es el parametro que podemos colocar al componente.

function App(props) {

  //Guardando info en localStorage
  const localStorageTodos = localStorage.getItem('TODOS_V1');

  //variable donde estaran los todos creados en localStorage
  let parsedTodos;

  //validamos si no hay nada en localStorage
  if(!localStorageTodos){
    //si no existe entonces creamos uno por defecto, y que sera un array vacio
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos = [];
  }
  else{
    //si hay datos en localStorage, entonces transformamos los datos en un objeto javascript({})
    parsedTodos = JSON.parse(localStorageTodos);
  }




  
  /*----------------buscador todos-------------------*/
  //cargamos estados por defecto(defaultTodos)
  //cambiamos a cargar datos desde localStorage
  const [todos, setTodos] = React.useState(parsedTodos);

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

    /*----------------buscador todos-------------------*/




    /*----------------Contador de todos-------------------*/
    //Creamos propiedades para implementar en el componente y pasarle datos de componentes externos

    //Filtrando cada todo completed(true) y contandolos
    const completedTodos = todos.filter(todo => todo.completed === true).length;
    //contando los todos Existentes
    const totalTodos = todos.length;
  /*----------------Contador de todos-------------------*/




  /*----------------Funcion para guardar localStorage datos -------------------*/
  const saveTodosStorage = (newTodos) => {
    //Necesitamos convertir nuestra data en un string para guardar en localStorage
    const stringifiedTodos = JSON.stringify(newTodos);

    //Llamamos a local storage y pasamos nuestro string con los datos de la aplicacion actualizada
    localStorage.setItem('TODOS_V1', stringifiedTodos);

    //actualizamos el estado de nuestra aplicacion, para que tanto como localStorage la pagina actualize los datos al instante
    setTodos(newTodos);
  };

  /*----------------Funcion para guardar localStorage datos -------------------*/





   /*----------------Ckeck completed todos -------------------*/
   const completeTodo = (text) => {
    //obtenemos la posicion, y comprobamos si el texto es igual al parametro recibido
    const indexTodo = todos.findIndex(todo => todo.text === text);

    //creamos una copia de todos la cual tendra la actualizacion
    const newTodos = [...todos];

    //entramos al todo y lo actualizamos
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;

    //actualizamos el estado de nuestra app, con la informacion nueva.
    //setTodos(newTodos);
    //Ahora actualizamos con local storage
    saveTodosStorage(newTodos);
   }
    /*----------------Check completed todos -------------------*/






    /*----------------Delete todos -------------------*/
    const deleteTodo = (text) => {
      //obtenemos la posicion(el todo exacto), y comprobamos si el texto es igual al parametro recibido
      const indexTodo = todos.findIndex(todo => todo.text === text);
  
      //creamos una copia de todos la cual tendra la actualizacion
      const newTodos = [...todos];

      //eliminamos el todo con el metodo splice
      newTodos.splice(indexTodo,1);
  
      //actualizamos el estado de nuestra app, con la informacion nueva.
      //setTodos(newTodos);
      //Ahora actualizamos con local storage
      saveTodosStorage(newTodos);
     }

    /*----------------Delete todos -------------------*/





  return (
    //Llamamos a nuestro componente con  la ui de la app
    <AppUI
      totalTodosProp={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
