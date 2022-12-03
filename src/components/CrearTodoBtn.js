import React from 'react';
import '../styles/CrearTodoBtn.css'

function CreateTodoButton(props) {
//podemos hacerlo sin pasar props, con useContext de react que es mas limpio

  const openModalFunction = (e) => { 
    //funciona -> props.setOpenModal(!props.openModal);

    //esta es otra forma, pera modificar tambien el background
    if(props.openModal){
      props.setOpenModal(false);
      //obtenemos el elemento con e.target. accedemos a style y background
      e.target.style.background = '#61DAFA';
    }else{
      props.setOpenModal(true);
      e.target.style.background = 'red';
    }
  }
  
  return (
    <React.Fragment>
    {/*primer metodo para ejecutar funciones*/}
    {/*<button className="CreateTodoButton" onClick={() => console.log('click')}>+</button>**/}

    {/* segunda forma*/}
    <button className="CreateTodoButton"  onClick={openModalFunction}>+</button>

    </React.Fragment>
  );
}

export { CreateTodoButton };