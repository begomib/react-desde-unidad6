import { fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';



describe('pruebas en  el hook de useFetchGif', () => {

    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook(() => useFetchGifs('tororo'));
        const { imagen, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();


        console.log(result);
    });


    test('debe de retornar un arreglo de imagenes y isloading en false', () => {

        const { result } = renderHook(() => useFetchGifs('tororo'));

        await waitFor(
            //callback
            () => expect(result.current.images.length).toBeGreaterThan(0),
        );

        const { imagen, isLoading } = result.current;


        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();



    })

});