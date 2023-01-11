import PropTypes from 'prop-types';
import { Image, View } from 'react-native';

/**
 * EmojiSticker component.
 * @param {number} imageSize In pixels.
 * @param {string} stickerSource Url sticker source.
 * @return {EmojiSticker} EmojiSticker component.
 */
export default function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -350 }}>
            <Image
                source={stickerSource}
                resizeMode="contain"
                style={{ width: imageSize, height: imageSize }}
            />
        </View>
    );
}

EmojiSticker.propTypes = {
    imageSize: PropTypes.number.isRequired,
    stickerSource: PropTypes.string.isRequired,
}
