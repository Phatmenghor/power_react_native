import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ParamListBase} from '@react-navigation/routers';
import MainScreen from '../features/Main/screen/MainScreen';
import FilterScreen from '../features/Filter/screen/FilterScreen';
import MessagerScreen from '../features/Messager/screen/MessagerScreen';
import SettingScreen from '../features/Setting/screen/SettingScreen';
import theme from '../constants/theme';
import tabName from './tabName';

const Tab = createBottomTabNavigator();

type Props = {
  route: RouteProp<ParamListBase, string>;
};

const screenOptions = ({route}: Props): BottomTabNavigationOptions => ({
  tabBarIcon: ({focused, color}) => {
    let iconName: string = 'home-sharp';

    if (route.name === tabName.home) {
      iconName = focused ? 'home-sharp' : 'home-outline';
    } else if (route.name === tabName.search) {
      iconName = focused ? 'search-sharp' : 'search-sharp';
    } else if (route.name === tabName.messages) {
      iconName = focused
        ? 'chatbox-ellipses-outline'
        : 'chatbox-ellipses-outline';
    } else if (route.name === tabName.settings) {
      iconName = focused ? 'settings-sharp' : 'settings-outline';
    }

    return <Ionicons name={iconName} size={22} color={color} />;
  },
  headerShown: false,
  tabBarActiveTintColor: theme.colors.second,
  tabBarInactiveTintColor: theme.colors.grayText,
  tabBarLabelStyle: {
    fontSize: 12,
  },
  tabBarStyle: {
    backgroundColor: theme.colors.primary,
  },
  tabBarItemStyle: {
    justifyContent: 'center',
  },
});

const MainTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name={tabName.home} component={MainScreen} />
      <Tab.Screen name={tabName.search} component={FilterScreen} />
      <Tab.Screen name={tabName.messages} component={MessagerScreen} />
      <Tab.Screen name={tabName.settings} component={SettingScreen} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
