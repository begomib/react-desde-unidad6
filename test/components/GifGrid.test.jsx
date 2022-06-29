import { render } from '@testing-library/react';
import { GifGrid } from "../../src/components/GifGrid";
import { screen } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

//mock completo 
jest.mock('../../src/hooks/useFetchGifs');


describe('puebras en <GifGrid/>', () => {


});

const category = 'totoro';
test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
        images: [],
        isLoading: true
    });


    render(<GifGrid category={category} />);
    //screen.debug();

    expect(screen.getByText('cargando...'));
    expect(screen.getByText(category))

});




test('dede de mostrar items cuando se cargan las imagenes useFetchGifs', () => {


    const gifs = [

        {
            id: 'ABC',
            title: 'ponyo',
            url: 'http://localhost/totoro.jpg'
        },

        {

            id: '123',
            title: 'totoro',
            url: 'http://localhost/ponyo.jpg'
        },

    ]


    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
    screen.debug();
});



