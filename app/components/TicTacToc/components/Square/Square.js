import PropTypes from 'prop-types';

import {
    SquareTouchableOpacity,
    ValueText
} from './Square.styles';

/**
 * Square component.
 * @param {Object} onPress Function to be called when the square is pressed.
 * @param {string} value Value of the square.
 * @return {Object} Board component.
 */
function Square({ onPress, value }) {
    return (
        <SquareTouchableOpacity onPress={onPress}>
            <ValueText>
                {value}
            </ValueText>
        </SquareTouchableOpacity>
    );
}

Square.propTypes = {
    onPress: PropTypes.func,
    value: PropTypes.oneOf(['X', 'O']),
};

export default Square;
