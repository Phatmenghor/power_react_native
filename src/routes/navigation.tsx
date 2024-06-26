import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routedName from './rutedName';
import MainTabNavigator from './mainTabbar';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routedName.main} component={MainTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
