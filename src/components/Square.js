import React from 'react';
import PropTypes from 'prop-types';

/**
 * Render game cell
 * @function Square
 * @param {string|null} value cell value
 * @param {function} onClick click handler for cell
 * @returns {JSX} clickable cell item
 */
const Square = ({ value, onClick }) => {
    return (
        <button
            type="button"
            className="square"
            onClick={onClick}
            style={squareStyle}
            data-testid="squarecell"
        >
            {value}
        </button>
    );
};

export default Square;

Square.propTypes = {
    value: PropTypes.oneOfType([PropTypes.oneOf([null]), PropTypes.string]),
    onClick: PropTypes.func.isRequired,
};

Square.defaultProps = {
    value: null,
};

/* styles */

const squareStyle = {
    width: '60px',
    height: '60px',
    backgroundColor: '#ddd',
    margin: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    color: 'black',
    border: 0,
    outline: 0,
    cursor: 'pointer',
};
