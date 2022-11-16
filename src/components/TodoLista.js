import React from "react";
import '../styles/TodoLista.css';

function TodoLista(props){
    return(
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoLista};