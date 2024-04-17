import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ParamListBase} from '@react-navigation/routers';
import MainScreen from '../features/Main/screen/MainScreen';

const Tab = createBottomTabNavigator();

type Props = {
  route: RouteProp<ParamListBase, string>;
};

const screenOptions = ({route}: Props): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused, color}) => {
    let iconName: string = 'home-sharp';

    if (route.name === 'Home') {
      iconName = focused ? 'home-sharp' : 'home-outline';
    } else if (route.name === 'Search') {
      iconName = focused ? 'search-sharp' : 'search-sharp';
    } else if (route.name === 'Messages') {
      iconName = focused
        ? 'chatbox-ellipses-outline'
        : 'chatbox-ellipses-outline';
    } else if (route.name === 'Settings') {
      iconName = focused ? 'settings-sharp' : 'settings-outline';
    }

    console.log('## ===iconName,', iconName);

    return <Ionicons name={iconName} size={22} color={color} />;
    // return <Feather name={'arrow-left'} size={25} color={color} />;
  },
  headerShown: false,
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray',
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarStyle: {
    backgroundColor: 'lightgray',
  },
  tabBarItemStyle: {
    justifyContent: 'center',
  },
  tabBarIconStyle: {},
});

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="Search" component={MainScreen} />
      <Tab.Screen name="Messages" component={MainScreen} />
      <Tab.Screen name="Settings" component={MainScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
