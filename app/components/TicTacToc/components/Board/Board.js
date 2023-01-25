import PropTypes from 'prop-types';

import { useState } from 'react';
import { Text, View } from 'react-native';
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
        return <Square onPress={() =>
            handleSquareClick(index)} value={squares[index]} />;
    };

    const winner = calculateWinner(squares);
    let status = `Player: ${player}`;
    if (winner)
        status = `Winner: ${winner}`;

    return (
        <View>
            <StatusDiv><Text>{status}</Text></StatusDiv>
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
        </View>
    );
}

Board.prototype = {
    onPress: PropTypes.func,
};

export default Board;
