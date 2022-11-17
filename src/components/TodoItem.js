import React from "react";
import '../styles/TodoItem.css';

function TodoItem(props){
  // funcion check para completado de items.
  const onCompleted = () => { alert('completada! ' + props.text)};

  //funcion para eliminar
  const onDelete = () => {alert('eliminaste' + props.text)};
    return (
        <li className="TodoItem">
          <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`} 
                onClick={onCompleted}>
            √
          </span>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
          <span 
                className="Icon Icon-delete"
                onClick={onDelete}>
            X
          </span>
        </li>
      );
}

export {TodoItem};