import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import { Pressable, StyleSheet, Text } from 'react-native';

/**
 * IconButton component.
 * @param {string} icon Url image source.
 * @param {string} label Description of the icon.
 * @param {func} onPress On press callback.
 * @return {IconButton} IconButton component.
 */
export default function IconButton({ icon, label, onPress }) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

IconButton.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    },
});
