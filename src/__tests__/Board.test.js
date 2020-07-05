import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Board from '../components/Board';

afterEach(cleanup);

describe('Board', () => {
    const props = {
        winner: null,
        xIsNext: true,
        squares: Array(9).fill(null),
        onClick: jest.fn(),
        onReset: jest.fn(),
    };

    it('renders board', () => {
        const { getByTestId, getByText } = render(<Board {...props} />);

        expect(getByTestId('gameboard')).toBeInTheDocument();
        expect(getByText(/Next player/)).toBeInTheDocument();
    });

    it('renders game cell', () => {
        const { getAllByTestId } = render(<Board {...props} />);

        expect(getAllByTestId('squarecell')).toHaveLength(9);
    });

    it('reset board on reset button is clicked', () => {
        const { getByText } = render(<Board {...props} />);

        const resetBtn = getByText(/Reset/);
        fireEvent.click(resetBtn);

        expect(props.onReset).toHaveBeenCalled();
    });
});
