import React from "react";
//import logo from './logo.svg';
//import '../App.css';
import { TodoContador} from "./TodoContador";
import {TodoBuscador} from "./TodoBuscador";
import { TodoLista } from './TodoLista';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CrearTodoBtn';
import {TodoContext} from "../componentContext/appContext"
import { Modal } from "../Modal/modalPortal";
import {Forms} from "../Forms/form"

function AppUI(){

  //recivimos nuestras props con useContext, que una forma limpia
  const {
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
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
        
          {openModal && (
            <Modal><Forms></Forms></Modal>
          )}

          <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>

        </React.Fragment>
      );
}
export {AppUI};