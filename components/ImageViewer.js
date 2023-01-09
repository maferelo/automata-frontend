import { Image, StyleSheet } from "react-native";

export default function ImageViewer({ placeholderImageSource }) {
  return <Image source={placeholderImageSource} style={styles.image} />;
}

ImageViewer.propTypes = {
  placeholderImageSource: Image.propTypes.source.isRequired,
};

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
