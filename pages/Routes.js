import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './Home';
import Playlist from './Playlist';

const Tab = createBottomTabNavigator();

export function RoutesTab() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Playlist" component={Playlist} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export function RoutesStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={RoutesTab} />
        <Stack.Screen name="Playlist" component={Playlist} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
