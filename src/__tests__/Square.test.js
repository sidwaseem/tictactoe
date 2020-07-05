import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Square from '../components/Square';

afterEach(cleanup);

describe('Square Cell', () => {
    const props = {
        value: null,
        onClick: jest.fn(),
    };

    it('renders cell', () => {
        const { getByTestId } = render(<Square {...props} />);
        const cell = getByTestId('squarecell');

        expect(cell).toBeInTheDocument();
        expect(cell.textContent).toEqual('');
    });

    it('render cell with content /O/ and execute callback on click', () => {
        const { getByTestId } = render(<Square {...props} value="O" />);

        const cell = getByTestId('squarecell');
        expect(cell.textContent).toEqual('O');

        fireEvent.click(cell);

        expect(props.onClick).toHaveBeenCalled();
    });
});
