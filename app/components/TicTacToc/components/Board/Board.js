import PropTypes from 'prop-types';

import { useState } from 'react';
import { calculateWinner } from '../Game/Game.utils';
import Square from '../Square';
import { BoardRowDiv, StatusDiv } from './Board.styles';

/**
 * Board component.
 * @return {Object} Board component.
 */
function Board() {
    const [player, setPlayer] = useState('X');
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleSquareClick = (index) => {
        const nextSquares = squares.slice();
        nextSquares[index] = player;
        setSquares(nextSquares);
        setPlayer(player === 'X' ? 'O' : 'X');
    };

    const renderSquare = (index) => {
        return <Square onClick={() =>
            handleSquareClick(index)} value={squares[index]} />;
    };

    const winner = calculateWinner(squares);
    let status = `Player: ${player}`;
    if (winner)
        status = `Winner: ${winner}`;

    return (
        <div>
            <StatusDiv>{status}</StatusDiv>
            <BoardRowDiv>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </BoardRowDiv>
            <BoardRowDiv>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </BoardRowDiv>
            <BoardRowDiv>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </BoardRowDiv>
        </div>
    );
}

Board.prototype = {
    onClick: PropTypes.func,
};

export default Board;
