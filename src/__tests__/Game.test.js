import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import Game from '../components/Game';

afterEach(cleanup);

describe('Game', () => {
    it('renders /game/', () => {
        const { container } = render(<Game />);
        expect(container).toBeInTheDocument();
    });
});
