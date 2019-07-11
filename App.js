
import { AppRegistry } from 'react-native';
import {
  createDrawerNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
import HomeScreen from "./HomeScreen";
import SettingsScreen from "./SettingsScreen";

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  settings: { screen: SettingsScreen }
});

export default createAppContainer(AppNavigator);

//export const AppNavigator =createAppContainer(Config.navigation);
AppRegistry.registerComponent('appName', () => AppNavigator);