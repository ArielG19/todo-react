import React from "react";
import {useLocalStorage} from "../CustomHook/localStorage"

/*¿Cómo uso React Context?
Hay 4 pasos para usar React Context:

1.Crear el contexto, utilizando const newConext = createContext();
2.Envolver tus componentes en el provider del contexto creado en el paso 1.
3.En la propiedad value del provider mandamos todas las props que queremos que sean accesibles por nuestros componentes.
4.Para usar una propiedad del provider en un componente, se usa <newConText.Consumer>
 */
const TodoContext = React.createContext();

function TodoProvider(props){
    //Usamos nuestro custom hook, indicamos cual es nuestro elemento y indicamos que es de tipo array
    const [todos, saveTodosStorage] = useLocalStorage('TODOS_V1',[]);

    /*----------------Modal----------------------------*/
    //estado para abrir y funcion actualizadora para cerrar el modal
    // el estado inicial es false para que nuestro modal este cerrado
    const [openModal, setOpenModal] = React.useState(false);

    /*----------------Modal----------------------------*/
    
    /*----------------buscador todos-------------------*/
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


    /*----------------Ckeck completed todos -------------------*/
    const completeTodo = (text) => {
    //obtenemos la posicion, y comprobamos si el texto es igual al parametro recibido
    const indexTodo = todos.findIndex(todo => todo.text === text);

    //creamos una copia de todos la cual tendra la actualizacion
    const newTodos = [...todos];

    //entramos al todo y lo actualizamos
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;

    //actualizamos el estado de nuestra app, con la informacion nueva.
    //setItem(newTodos);
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
        //setItem(newTodos);
        //Ahora actualizamos con local storage
        saveTodosStorage(newTodos);
    }

    /*----------------Delete todos -------------------*/

       /*----------------add todos -------------------*/
       //exportaremos esta funcion para crear todos en nuestro componete forms
       
       const addTodo = (text) => {
        //creamos una copia de todos, la cual incluira los nuevos datos
        const newTodos = [...todos];

        newTodos.push({
            completed:false,
            text,
        });

        //Ahora actualizamos con local storage
        saveTodosStorage(newTodos);
    }

    /*----------------Delete todos -------------------*/
    return (
        //en value indicamos las propiedades que queremos compartir
        <TodoContext.Provider value={{   
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo,
        }}>{props.children}</TodoContext.Provider>
    );
}

//exportamos context y el provider
export {TodoContext,TodoProvider};