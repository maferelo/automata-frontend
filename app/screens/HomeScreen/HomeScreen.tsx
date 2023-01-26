import { Button, View } from "react-native";

type HomeScreenProps = {
  navigation: any;
};

/**
 * HomeScreen component.
 * @param navigation Navigation object.
 * @return HomeScreen component.
 */
export default function HomeScreen({
  navigation,
}: HomeScreenProps): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => navigation.navigate("Notifications")}
        title="Go to notifications"
      />
    </View>
  );
}
