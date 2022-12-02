import React from "react";
import "../styles/TodoContador.css" //agregando estilos css
import {TodoContext} from "../componentContext/appContext"

//aplicado css(estilos en linea) con react 
//crear un objeto con las propiedades a cambiar

/*const estilos = {
    color:'red',
    backgroundColor:'Black'
};*/ 


function TodoContador(){

    //recivimos nuestras props con useContext, que una forma limpia
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

    return(
       /* <React.Fragment>
            <h2 style={estilos}>Has completado 2 de 3 TODOS</h2>
            <h6 className="H6">Prueba css con hoja de estilos y clase React</h6>
        </React.Fragment>*/

          <React.Fragment>
            <h2 className="TodoContador">Has completado {completedTodos} de {totalTodos} TODOS</h2>
            
        </React.Fragment>
    );
}
//exportamos componente estrictamente con este nombre
export {TodoContador};