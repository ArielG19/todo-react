import React from "react";
import { TodoContext } from "../componentContext/appContext";
import "./forms.css"

function Forms(){
    //traemos nuestras funciones  usando reactContext
    const {addTodo,setOpenModal} = React.useContext(TodoContext);

    //Creamos un nuevo estado local "state", para obtener el value del form
    const [newTodoForm, setTodoForm] = React.useState('');

    const onCacelForm = () => {
        //cerramos el modal
        setOpenModal(false);
    }
    const onAddForm = (event) => {
        //este evento sirve para que al hacer onSubmit no se recargue la pagina
        event.preventDefault();
        
        //enviamos a guardar nuestra info
        addTodo(newTodoForm);

        //cerramos el modal
        setOpenModal(false);
        
    }

    //pasamos el event como parametro para obtner el value de lo que escriba el usuario
    const onChageForm = (event) => {
       setTodoForm(event.target.value);
    }

    return(
        <form onSubmit={onAddForm}>
            <textarea placeholder="Escribe un todo nuevo..." value={newTodoForm} onChange={onChageForm}></textarea>

            <div className="TodoForm-buttonContainer">
            <button type="button" onClick={onCacelForm} className="TodoForm-button TodoForm-button--cancel">Cancelar</button> 
            <button type="submit" className="TodoForm-button TodoForm-button--add">Agregar</button>
            </div>
        </form>
       
    );
}
export {Forms};