import { useEffect, useState } from "react";
import{getGifs}from '../helpers/getGifs'

export const useFetchGifs=(category)=>{
//un hook es una funcion que regresa algo , return es un objeto
    
const [images, setImages] = useState ([]);
const[isLoading, setIsloading]= useState(true);

const getImages=async() => {
const newImages = await getGifs(category);
setImages(newImages);
setIsloading(false);
//dispara solo 1 renderizacion en react18


}

useEffect ( ()=> {
    getImages();
}, []);


return{

        images,
        isLoading
    }
}