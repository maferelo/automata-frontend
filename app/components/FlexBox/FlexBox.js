import { View } from 'react-native';
import { Container } from "./FlexBox.styles";

/**
 * Main app component.
 * @return {Object} Main app component.
 */
export default function FlexBox() {
    return (
        <Container>
            <View style={{ flex: 1, backgroundColor: 'red' }} />
            <View style={{ flex: 2, backgroundColor: 'darkorange' }} />
            <View style={{ flex: 3, backgroundColor: 'green' }} />
        </Container>
    );
}
