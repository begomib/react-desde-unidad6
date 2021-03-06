import { render } from '@testing-library/react';
import { GifItem } from "../../src/components/GifItem";


describe('Pruebas en <GifItem/>', () => {

    const title = 'totoro';
    const url = 'http://totoro.com/totoro.jpg'

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        //const { src, alt } = screen.getByRole('img');
        //expect(src).toBe(url);
        //expect(alt).toBe(alt);


        //expect(screen.getByRole('img').src).toBe(url);
        //expect(screen.getByRole('img').alt).toBe(title + "!");

    });


})

