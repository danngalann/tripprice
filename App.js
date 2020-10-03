import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

// Context
import { AppProvider } from "./src/context/AppContext";

// Components
import Sidebar from "./src/components/Sidebar";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import SettingsScreen from "./src/screens/SettingsScreen";

const Navigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    defaultNavigationOptions: {
      title: "Trip Price",
    },
    contentComponent: (props) => <Sidebar {...props} />,
  }
);

const App = createAppContainer(Navigator);

export default () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  );
};
