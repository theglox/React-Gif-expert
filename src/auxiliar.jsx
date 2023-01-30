export const getImagen = async()=>{
    try {
        const apikey = 'y2d4P4wayTK3U7iWK1W7JcotUDLiRNtq';
        const respuesta = await  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
        const {data} = await respuesta.json();
         const  {url} = data.images.original
         return url
        
    }  catch (error) {
        return 'ocurrio un error'
    }

}

getImagen();
