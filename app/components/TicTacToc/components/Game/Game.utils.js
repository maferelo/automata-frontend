import PropTypes from 'prop-types';

/**
 * Check if array of len 9 representing a tictactoc game has a winner and returns it
 * else returns null.
 * @param {Array} squares Props.
 * @return {string} Winner else null.
 */
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

calculateWinner.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.string)
};

export { calculateWinner };
