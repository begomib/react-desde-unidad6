import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory(inputValue.trim());


        // console.log(inputValue);
        //setCategories(categories => [inputValue, ...categories]);
        //setCategories(categories => [inputValue, ...categories]); comentado en cap 78 ahora se llama a onNewCategory
        //onNewCategory(inputValue.trim());

    }




    return (

        //<form onSubmit={(event) => onSubmit(event)}>
        //mas simple cap 77, hace lo mismo

        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            //es lo  mismo que arriba cap76, onChange={(event)=>onInputChange(event)}
            />

        </form >



    )


}

AddCategory.propTypes = {

    onNewCategory: PropTypes.func.isRequired,
}