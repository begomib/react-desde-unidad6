import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory, onNewCategory } from "../../src/components";

describe('pruebas en <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);


        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: 'totoro' } });
        expect(input.value).toBe('totoro');
        screen.debug();

    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'totoro';
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);
        //screen.debug();

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
       
        //se llamo una vez(1) si pongo (2) sale error, tengo qeu repetir el event y pasa
        expect(onNewCategory).toHaveBeenCalledTimes(1);

       
        //esta si evalua que haya sido llamada con la caja de texto
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    })

    test('no debe de llamar onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        // expect (onNewCategory).not.toHaveBeenCalled(); es lo mismo que arriba

    })
});