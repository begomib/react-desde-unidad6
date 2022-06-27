import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';

// use effect sirve para disparar efectos secundarios( proceso cuando algo suceda, cuando el counter cambie,, etc se dispara un efecto)

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({ images, isLoading });

    //comentado cap86
    // const [images, setImages] = useState([]);

    //const getImages = async () => {
    //  const newImages = await getGifs(category);
    //setImages(newImages);
    // }

    //useEffect(() => {
    //  getImages();

    // }, [])

    // no poner la ejecucion de una funcion en un functional component porque se va ejecutar cada vez que se renderiza
    // y volver a ejecutar la peticion http solo se debe ejecutar una sola vez la peticion. hook use efect




    return (

        <>
            <h3>{category}</h3>
          {
            isLoading && (<h2>cargando...</h2>)
             
         
         }
           
            
            
           
        



            <div className="card-grid">

                {
                    images.map((image) => (
                        <GifItem
                            key={image.id}
                            {...image}
                        // todas las propiedades de la imagenes como properties 
                        />
                    ))

                }

            </div>

            {/*<h5>{counter}</h5>

    <button onClick={() => setCounter(counter + 1)} >+1</button>*/}

        </>

    )

}