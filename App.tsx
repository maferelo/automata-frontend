import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import React from "react";

import Box from "./app/components/Box";
import FlexBox from "./app/components/FlexBox";
import TicTacToc from "./app/components/TicTacToc";
import HomeScreen from "./app/screens/HomeScreen";

/**
 * Main app component.
 * @return Main app component.
 */
export default function App(): JSX.Element {
  const [status, requestPermission] = MediaLibrary.usePermissions();

  if (status === null) {
    requestPermission();
  }

  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Box" component={Box} />
        <Drawer.Screen name="FlexBox" component={FlexBox} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="TicTacToc" component={TicTacToc} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
