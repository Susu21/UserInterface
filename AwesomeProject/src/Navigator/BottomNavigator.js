import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import OnPressFeed from '../screens/OnPressFeed';

const Tab = createBottomTabNavigator();
const options = {headerShown: false};

function BottomNavigator() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {position: 'absolute'}}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: 'grey',
          tabBarInactiveTintColor: '#585858',
        }}
      />
      <Tab.Screen
        name="OnPressFeed"
        component={OnPressFeed}
        options={{headerShown: true, tabBarShowLabel: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
