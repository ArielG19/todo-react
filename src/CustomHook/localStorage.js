import React from "react";
/*custom hook - LocalStorage */

  //Podemos crear hooks personalizados

  //Todo hook Debe empezar por use: useDev

  //No anidar hooks

  //Se llaman dentro de componentes React o hooks propios , no en funciones normales.

  //OBJETIVO: Reutilizar codigo, debe funcionar para guardar cualquier tipo de datos en el localStorage

  //PARAMETROS:

  //Nombre para el item en nuestro localStorage
  //Estado inicial
  //DEBE REGRESAR ALGUN DATO PARA QUE FUNCIONE

  //Datos actuales de nuestro item en localStorage
  //Funcion que actualize datos de item 

  function useLocalStorage(itemName, initialValue){

    //obteniendo los elementos en localStorage "archivo -> TODOS_v1" 
    const localStorageItem = localStorage.getItem(itemName);

    //variable donde estaran los elementos creados en localStorage
    let parsedItem;

    //validamos si no hay nada en localStorage
    if(!localStorageItem){
      //si no existe entonces creamos uno por defecto, y que sera un array vacio
      /*localStorage.setItem(itemName,JSON.stringify([]));
      parsedItem = [];*/
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
    }
    else{
      //si hay datos en localStorage, entonces transformamos los datos en un objeto javascript({})
      parsedItem = JSON.parse(localStorageItem);
    }

    //cambiamos a cargar datos desde localStorage
    const [item, setItem] = React.useState(parsedItem);
    


    /*----------------Funcion para guardar localStorage datos -------------------*/
    const saveItemStorage = (newItem) => {
      //Necesitamos convertir nuestra data en un string para guardar en localStorage
      const stringifiedItem = JSON.stringify(newItem);

      //Llamamos a local storage y pasamos nuestro string con los datos de la aplicacion actualizada
      localStorage.setItem(itemName, stringifiedItem);

      //actualizamos el estado de nuestra aplicacion, para que tanto como localStorage la pagina actualize los datos al instante
      setItem(newItem);
    };

    /*----------------Funcion para guardar localStorage datos -------------------*/

    /* Retornando nuestro funcionalidad */
    return [item,saveItemStorage];

  }

export {useLocalStorage};