import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import * as MediaLibrary from "expo-media-library";
import React from "react";
import { Provider } from "react-redux";

import { useDispatch } from "react-redux";
import { getTasks } from "src/api/task";
import Boxy from "src/components/Box";
import FlexBox from "src/components/FlexBox";
import TicTacToc from "src/components/TicTacToc";
import HomeScreen from "src/screens/HomeScreen";
import { store } from "src/store";

/**
 * Main app component.
 * @return Main app component.
 */
function App(): JSX.Element {
  const [status, requestPermission] = MediaLibrary.usePermissions();
  const dispatch = useDispatch();

  if (status === null) {
    requestPermission();
  }

  const Drawer = createDrawerNavigator();

  React.useEffect(() => {
    getTasks(dispatch);
  }, []);

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Box" component={Boxy} />
        <Drawer.Screen name="FlexBox" component={FlexBox} />
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="TicTacToc" component={TicTacToc} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default function AppWrapper(): JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
