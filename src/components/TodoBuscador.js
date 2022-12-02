import React from "react";
import '../styles/TodoBuscador.css'
import {TodoContext} from "../componentContext/appContext"

//1. manejaremos el state desde el componente padre
function TodoBuscador(){

    //recivimos nuestras props con useContext, que una forma limpia
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    //Manejo de estados (posicion 0 el estado actual, 1 -> el estado que nuevo)
    //const [searchValue, setSearchValue] = React.useState('');

    //event -> nos indica el valor recibido como parametro
    const onSearchValue =  (event) => {
        //console.log(event.target.value)
        setSearchValue(event.target.value);
    }
    // podemos usar [] tambien para envolver varios contendores
    return[
        //metodo onChange para reacionar a cada cambio en input

        <input 
            className="TodoBuscador" 
            placeholder="buscar..."
            value={searchValue}
            onChange={onSearchValue}
            key={setSearchValue}/>,

        <p key={searchValue}></p>
    ];
}

export {TodoBuscador};