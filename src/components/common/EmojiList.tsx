import PropTypes from 'prop-types';
import { useState } from 'react';
import { FlatList, Image, Platform, Pressable, StyleSheet } from 'react-native';

/**
 * EmojiList component.
 * @param {function} onSelect On select callback.
 * @param {function} onCloseModal On close modal callback.
 * @return {EmojiList} EmojiList component.
 */
export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        require('../images/emojis/emoji1.png'),
        require('../images/emojis/emoji2.png')
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => {
                return (
                    <Pressable
                        onPress={() => {
                            onSelect(item);
                            onCloseModal();
                        }}>
                        <Image source={item} key={index} style={styles.image} />
                    </Pressable>
                );
            }}
        />
    );
}

EmojiList.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onCloseModal: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});
