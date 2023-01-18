import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

/**
 * CenterView
 * @param {Object} children Children to render inside button.
 * @return {Object} Button component.
 */
export default function CenterView({ children }) {
  return <View style={style.main}>{children}</View>;
}

CenterView.defaultProps = {
  children: null,
};

CenterView.propTypes = {
  children: PropTypes.node,
};
