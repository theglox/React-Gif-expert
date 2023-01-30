import React, { useState } from 'react'
import {AddCategory,GifGrid} from './components/index';
//import GifGrid from './components/GifGrid';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);
    const onAddCategory = (newCategory) =>{
        //validando que no se repita una nueva categoria para que no se repita key ambien
        if(categories.includes(newCategory))return;

        //agregando nuevas categorias
        setCategories([newCategory,...categories])
    }
  return (
    <>
        {/* titulo */}
        <h1>GifExpert</h1>
        {/* Input */}
        <AddCategory 
        
            // setCategorys ={setCategories} // manipulando el estado desde el componente hijo

            //pasando el  valor desde el componente hijo para cambiarlo en el padre
                onNewValue={value => onAddCategory(value)}

        
        />
        

        {/* Listado de tarjetas que contiene gif items */}
    

        {categories.map((category)=>{
            return (

                    <GifGrid key={category} category={category} />


            )
        })}

    </>
  )
}
