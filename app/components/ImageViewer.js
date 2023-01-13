import PropTypes from 'prop-types';
import { Image, StyleSheet } from "react-native";

/**
 * Button component.
 * @param {string} placeholderImageSource Url image source.
 * @param {string} selectedImage Url selected image source.
 * @return {Image} Image component.
 */
export default function ImageViewer({ placeholderImageSource, selectedImage }) {
  const imageSource = selectedImage !== null
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

ImageViewer.propTypes = {
  placeholderImageSource: PropTypes.number.isRequired,
  selectedImage: PropTypes.string,
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
