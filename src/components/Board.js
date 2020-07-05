import React from 'react';
import PropTypes from 'prop-types';
import Square from './Square';

/**
 * Render Tic Tac Toe board with squares
 * @function Board
 * @param {string|null} winner player type if winner else null
 * @param {Boolean} xIsNext track first player position
 * @param {Array} squares array containing game state
 * @param {function} onClick Callback method that handle player choice
 * @param {function} onReset Callback method to reset game
 * @returns {JSX} Game board
 */
const Board = ({ winner, xIsNext, squares, onClick, onReset }) => {
    return (
        <div style={containerStyle} data-testid="gameboard">
            <div style={headerStyle}>
                <h1>Tic Tac Toe</h1>
                {!winner && (
                    <div style={instructionsStyle}>
                        Next player: {xIsNext ? 'X' : 'O'}
                    </div>
                )}
                {winner && (
                    <div style={instructionsStyle}>Winner: {winner}</div>
                )}

                <button type="button" style={buttonStyle} onClick={onReset}>
                    Reset
                </button>
            </div>
            <div style={boardStyle}>
                <div style={rowStyle}>
                    <Square
                        value={squares[0]}
                        onClick={() => onClick({ id: 0, x: 0, y: 0 })}
                    />
                    <Square
                        value={squares[1]}
                        onClick={() => onClick({ id: 1, x: 0, y: 1 })}
                    />
                    <Square
                        value={squares[2]}
                        onClick={() => onClick({ id: 2, x: 0, y: 2 })}
                    />
                </div>
                <div style={rowStyle}>
                    <Square
                        value={squares[3]}
                        onClick={() => onClick({ id: 3, x: 1, y: 0 })}
                    />
                    <Square
                        value={squares[4]}
                        onClick={() => onClick({ id: 4, x: 1, y: 1 })}
                    />
                    <Square
                        value={squares[5]}
                        onClick={() => onClick({ id: 5, x: 1, y: 2 })}
                    />
                </div>
                <div style={rowStyle}>
                    <Square
                        value={squares[6]}
                        onClick={() => onClick({ id: 6, x: 2, y: 0 })}
                    />
                    <Square
                        value={squares[7]}
                        onClick={() => onClick({ id: 7, x: 2, y: 1 })}
                    />
                    <Square
                        value={squares[8]}
                        onClick={() => onClick({ id: 8, x: 2, y: 2 })}
                    />
                </div>
            </div>
        </div>
    );
};

export default Board;

Board.propTypes = {
    winner: PropTypes.string,
    xIsNext: PropTypes.bool.isRequired,
    squares: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
};

Board.defaultProps = {
    winner: null,
};

/* styles */
const rowStyle = {
    display: 'flex',
};

const boardStyle = {
    backgroundColor: '#eee',
    width: '208px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    border: '3px #eee solid',
};

const headerStyle = {
    width: '208px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '30px',
};

const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
};

const instructionsStyle = {
    marginTop: '5px',
    marginBottom: '5px',
    fontWeight: 'bold',
    fontSize: '16px',
};

const buttonStyle = {
    marginTop: '15px',
    marginBottom: '16px',
    width: '80px',
    height: '40px',
    backgroundColor: '#8acaca',
    color: 'white',
    fontSize: '16px',
    outline: 0,
    border: '1px solid #8acaca',
    borderRadius: '20px',
    cursor: 'pointer',
};
