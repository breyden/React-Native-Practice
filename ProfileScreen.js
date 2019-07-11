import Config from './config';

import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator(Config.navigation);
AppRegistry.registerComponent('appName', () => AppNavigator);