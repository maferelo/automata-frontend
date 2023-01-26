import PropTypes from 'prop-types';
import { Alert } from "react-native";

import { Button } from './Emoji.styles';


const Emoji = () => <Button title="" onClick={() => Alert.alert("Hola")}>hola</Button>;

Emoji.prototype = {
    onClick: PropTypes.func,
};

export default Emoji;
