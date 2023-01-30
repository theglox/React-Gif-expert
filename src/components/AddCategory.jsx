import { useState } from "react"


export const AddCategory = ({onNewValue}) => {
  //HOOKS
  const [inputValue, setInputValue] = useState('One Punch');

  //FUNCIONES
  //Cptura las teclas
  const onInputChange = ({target})=>{
    setInputValue(target.value)
  }
//compotmaiento del formulario 
  const onSubmit = (event)=>{
    event.preventDefault();
    //VALIDACIONES PARA EL INPUT
    if(inputValue.trim().length <=1) return;
 
    //setCategorys(categories =>[inputValue,...categories]) //metodo antiugo

    //metodo para pasar solo el nuevo laor del inputa al comoponente padre
    onNewValue(inputValue);
    //borrando el input una vez insertado 
    setInputValue('');
  }

  return (

    <form onSubmit={ onSubmit}>
      <input 
        type="text"
        placeholder="Buscar Gif..." 
        value={inputValue}
        onChange={onInputChange}
      />   
    </form>

    
  )
}


