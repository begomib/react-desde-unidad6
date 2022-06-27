import { useState } from "react";
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['totoro']);

    const onAddCategory = (newCategory) => {

        //esto hace que no se pueda poner dos categorias iguales
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);

        console.log(newCategory);


        //if(categories.includes(newCategory))return;



        //setCategories([...categories,'valorant']);

        // dejar de usar el push para agregar en arreglos por el momentos, push muta objeto y react trata de no mutar el estado
        // hay que crear un nuevo arreglo y para cambiar las categorias se usa setCategories
        //categories.push('Valorant');
        //console.log('Valorant');


    }

    return (

        <>


            <h1>Banco de gifs - Begoña</h1>


            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}


            //setCategories={setCategories}/> eliminado en cap78
            />

            {
                categories.map((category) => (

                    <GifGrid
                        key={category}
                        category={category} />
                ))
                //<li key={category}>{category}</li>
            }




        </>

    )
}



