//funcion para haccer conexion a api

export const getGif =async(category) =>{
    const apiKey = 'y2d4P4wayTK3U7iWK1W7JcotUDLiRNtq',
            limit = 6;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limit}`

    const respuesta = await fetch(url);

    const {data} =await respuesta.json();
    const gifs = data.map(img =>{
        return{
            id:img.id,
            title: img.title,
            url: img.images.downsized_medium  

        }
    })
  
    return gifs;
}

