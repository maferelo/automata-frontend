import PropTypes from 'prop-types';
import { Alert } from "react-native";

import { Button } from './Box.styles';


const Box = () => <Button title="" onClick={() => Alert.alert("Hola")}>hola</Button>;

Box.prototype = {
    onClick: PropTypes.func,
};

export default Box;
