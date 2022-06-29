import { useState, useEffect } from 'react';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';


//import { getGifs } from '../helpers/getGifs';

// use effect sirve para disparar efectos secundarios( proceso cuando algo suceda, cuando el counter cambie,, etc se dispara un efecto)

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    console.log({ images, isLoading });

    

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

           
        </>

    )





}

    GifGrid.propTypes={
        category:PropTypes.string.isRequired,


    }