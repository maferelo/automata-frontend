import PropTypes from 'prop-types';

import Game from './components/Game';


const TicTacToc = () => <Game />;

TicTacToc.prototype = {
    onClick: PropTypes.func,
};

export default TicTacToc;
