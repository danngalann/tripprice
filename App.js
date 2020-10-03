import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

// Components
import Sidebar from './src/components/Sidebar';

// Screens
import HomeScreen from "./src/screens/HomeScreen";

const Navigator = createDrawerNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    unmountInactiveRoutes: true,
    headerMode: "none",
    defaultNavigationOptions: {
      title: "Trip Price",
    },
    contentComponent: props => <Sidebar {...props} />
  }
);

export default createAppContainer(Navigator);