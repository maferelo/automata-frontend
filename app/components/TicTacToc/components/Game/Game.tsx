import Board from '../Board';
import { GameBoardDiv, GameDiv, GameInfoDiv } from './Game.styles';

/**
 * Board component.
 * @return {Object} Board component.
 */
function Game() {
    return (
        <GameDiv>
            <GameBoardDiv>
                <Board />
            </GameBoardDiv>
            <GameInfoDiv>
                {/* TODO */}
            </GameInfoDiv>
        </GameDiv>
    );
}

export default Game;
