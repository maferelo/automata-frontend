import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native';

/**
 * Button component.
 * @param {func} onPress Function to call when button is pressed.
 * @param {Object} children Children to render inside button.
 * @return {Object} Button component.
 */
export default function Button({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  onPress: () => { },
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
