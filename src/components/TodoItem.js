import React from "react";
import '../styles/TodoItem.css';

function TodoItem(props){
  // funcion check para completado de items.
  //const onCompleteTodo = () => { alert('completada! ' + props.text)};

  //recibimos las funciones como propiedades en nuestro componente

  //funcion para eliminar
 // const onDelete = () => {alert('eliminaste' + props.text)};

    return (
        <li className="TodoItem">
          <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                onClick={props.onCompleteProps}>
            √
          </span>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
          <span 
                className="Icon Icon-delete"
                onClick={props.onDeleteProps}>
            X
          </span>
        </li>
      );
}

export {TodoItem};