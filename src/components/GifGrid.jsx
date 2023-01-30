import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGifs";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifItam} from "./GifItam";


//-----------------Funcion componente-----------


export const GifGrid = ({category}) => {

    //custom Hook
 const {images, isLoading} = useFetchGifs( category);
    //HOOKS
    //estso hoks se pasaron a un custom hook
// const [images, setImages] = useState([]);    

// const getImages = async()=>{
//     const newImages =await getGif(category);
//     setImages(newImages)
// }

// useEffect(()=>{
//     getImages();
// },[])


//nunca se debe colocar la  ejecuciond e una funcion en un funcional component como la siguiente linea
//getGif(category);

  return (
    <>
        <h3>{category}</h3>
        {/* formas para crear un isloading */}

        { 
        // usando ternario
            isLoading
            ? ( <h2> Cargando...</h2>)
            : null

        }
        {/* {
            // oeprador logico
            isLoading && ( <h2> Cargando...</h2>)
        }
        */}
      

{/* //////////////////////// */}
        <div className="card-grid">
            {
                images.map( (image)=>(
                    <GifItam 
                         key={image.id}
                         {...image}

                    />
                ))
            }
            
        </div>
    </>
  )
}


