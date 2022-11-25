import React from "react";
//import logo from './logo.svg';
//import '../App.css';
import { TodoContador} from "./TodoContador";
import {TodoBuscador} from "./TodoBuscador";
import { TodoLista } from './TodoLista';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CrearTodoBtn';

function AppUI({totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
}){
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