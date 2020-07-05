import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor() {
        super();

        this.cellDefault = Array(3).fill(0);
        this.defaultState = Array(9).fill(null);

        this.size = 3; // grid size
        this.row = [...this.cellDefault];
        this.col = [...this.cellDefault];
        this.d1 = 0;
        this.d2 = 0;

        this.state = {
            squares: [...this.defaultState],
            stepNumber: 0,
            xIsNext: true,
            winner: null,
        };
    }

    /**
     * Handle player action on square and update state
     * @method handleCellClick
     * @param {Number} id cell id
     * @param {Number} x row index
     * @param {Number} y column index
     * @returns {void}
     */

    handleCellClick = ({ id, x, y }) => {
        let win = null;
        const { winner, squares, stepNumber, xIsNext } = this.state;

        // bail out if cell has a value or winner is declared
        if (squares[id] || winner) return;

        const player = xIsNext ? 'X' : 'O';
        const score = this.move(x, y, player);

        // update cell with player value
        squares[id] = player;

        // bail out if winner is declared
        if (score) {
            win = score;
        }

        // update state
        this.setState({
            squares: squares,
            xIsNext: !xIsNext,
            stepNumber: stepNumber + 1,
            winner: win,
        });
    };

    /**
     * On players move, calculate the winner
     * @param {Number} x row index
     * @param {Number} y column index
     * @param {string} player 'X' or 'O'
     * @returns {string | null} winning player or null
     */
    move = (x, y, player) => {
        const { row, col, size } = this;

        if (player === 'X') {
            // Increment row & column score for player 1
            row[x]++;
            col[y]++;

            // udpate left diagonal
            if (x === y) this.d1++;

            // update right to left diagonal
            if (x + y === size - 1) this.d2++;

            // return winner if condition satifies
            if (
                row[x] === size ||
                col[y] === size ||
                this.d1 === size ||
                this.d2 === size
            ) {
                return 'X';
            } else return null;
        } else {
            // Decrement row & column score for player 2
            row[x]--;
            col[y]--;

            // udpate left diagonal
            if (x === y) this.d1--;

            // update right to left diagonal
            if (x + y === size - 1) this.d2--;

            // return winner if condition satifies
            if (
                row[x] === -size ||
                col[y] === -size ||
                this.d1 === -size ||
                this.d2 === -size
            ) {
                return 'O';
            } else return null;
        }
    };

    /**
     * Reset Board
     * @method onReset
     * @memberof Game
     * @returns {void}
     */
    onReset = () => {
        // reset rows and columns
        this.row = [...this.cellDefault];
        this.col = [...this.cellDefault];

        // reset diagonals
        this.d1 = 0;
        this.d2 = 0;

        // reset state
        this.setState({
            squares: [...this.defaultState],
            xIsNext: true,
            stepNumber: 0,
            winner: null,
        });
    };

    /**
     * Render component
     * @method render
     * @memberof Game
     */
    render() {
        const { winner, squares, xIsNext } = this.state;
        return (
            <Board
                winner={winner}
                xIsNext={xIsNext}
                squares={squares}
                onClick={this.handleCellClick}
                onReset={this.onReset}
            />
        );
    }
}

export default Game;
