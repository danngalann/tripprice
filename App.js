import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Screens
import HomeScreen from "./src/screens/HomeScreen";

const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Trip Price",
    },
  }
);

export default createAppContainer(Navigator);