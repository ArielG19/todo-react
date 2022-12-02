import React from "react";
//import logo from './logo.svg';
//import '../App.css';
import { TodoContador} from "./TodoContador";
import {TodoBuscador} from "./TodoBuscador";
import { TodoLista } from './TodoLista';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CrearTodoBtn';
import {TodoContext} from "../componentContext/appContext"

function AppUI(){

  //recivimos nuestras props con useContext, que una forma limpia
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    } = React.useContext(TodoContext);


    return (
        <React.Fragment>
          <TodoContador/>
          <TodoBuscador/>

               <TodoLista>
               {searchedTodos.map(todo => (
                 <TodoItem
                   key={todo.text}
                   text={todo.text}
                   completedProps={todo.completed}
                   onCompleteProps={() => completeTodo(todo.text)}
                   onDeleteProps={() => deleteTodo(todo.text)}
                 />
               ))}
             </TodoLista>
        
         
          <CreateTodoButton/>
        </React.Fragment>
      );
}
export {AppUI};