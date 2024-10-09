import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Settings } from 'react-native';
import Home from '../screens/Home';
import SettingsScreen from '../screens/SettingScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? require('../Assets/images/home-active.png') // Add your icon path here
              : require('../Assets/images/home.png'); // Add your icon path here
          } else if (route.name === 'Settings') {
            iconName = focused
              ? require('../Assets/images/setting-active.png') // Add your icon path here
              : require('../Assets/images/setting.png'); // Add your icon path here
          }
          return <Image source={iconName} style={{ width: size, height: size, tintColor: color }} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#83bbb2',
          borderTopWidth: 0,
          elevation: 5,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
