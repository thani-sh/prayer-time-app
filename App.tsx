import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StatusBar } from 'react-native';
import PrayersScreen from './src/routes/Prayers';
import SettingsScreen from './src/routes/Settings';
import { RouteStackParams } from './src/routes/types';

const Stack = createNativeStackNavigator<RouteStackParams>();

const App = () => {
  React.useEffect(() => {
    StatusBar.setBackgroundColor('#000000');
    StatusBar.setTranslucent(true);
  }, []);

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator initialRouteName="Prayers">
        <Stack.Screen name="Prayers" component={PrayersScreen} options={{title: 'Prayers', headerShown: false}} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{title: 'Settings', headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
