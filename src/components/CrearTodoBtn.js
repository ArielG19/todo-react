import React from 'react';
import '../styles/CrearTodoBtn.css'

function CreateTodoButton(props) {

  const clickBtn = () => { alert('Hola metodo click');}
  const changeBackground = (e) => {e.target.style.background ='red'}
  return (
    <React.Fragment>
    {/*primer metodo para ejecutar funciones*/}
    {/*<button className="CreateTodoButton" onClick={() => console.log('click')}>+</button>**/}

    {/* segunda forma*/}
    <button className="CreateTodoButton"  onClick={clickBtn} onMouseOver={changeBackground}>+</button>

    </React.Fragment>
  );
}

export { CreateTodoButton };