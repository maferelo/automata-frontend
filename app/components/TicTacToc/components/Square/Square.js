import PropTypes from 'prop-types';

import { Button } from './Square.styles';

/**
 * Board component.
 * @param {Object} props Props.
 * @return {Object} Board component.
 */
function Square({ onClick, value }) {
    return (
        <Button onClick={onClick}>
            {value}
        </Button>
    );
}

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O']),
    onClick: PropTypes.func,
};

export default Square;
