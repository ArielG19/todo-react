import React from "react";
import '../styles/TodoBuscador.css'

function TodoBuscador(){
    //event -> nos indica el valor recibido como parametro
    const onSearchValue =  (event) => {console.log(event.target.value)}
    return(
        //metodo onChange para reacionar a cada cambio en input
        <input 
            className="TodoBuscador" 
            placeholder="buscar..."
            onChange={onSearchValue}/>
    );
}

export {TodoBuscador};