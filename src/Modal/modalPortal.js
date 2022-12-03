import ReactDOM from 'react-dom';
import "../styles/Modal.css"

//creamos nuestro componente como cualquier otro, importante nombre de componetes en mayuscula.
//pasamos la propiedad children para cuando lo utilizemos podamos enviar, formularios, props,,components,etc.

function Modal({children}){

    //aqui retornamos a react-dom, el primer argumento son las props "children", el segundo el nodo "div"
    return ReactDOM.createPortal(
        //children,
        <div className="ModalBackground">
        {children}
      </div>,
        document.getElementById('modal')
    );
}

export {Modal};