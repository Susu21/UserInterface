import {faL} from '@fortawesome/free-solid-svg-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import App from '../component/Chart';
import Chart from '../component/Chart';
import Dashboard from '../component/Dashboard';
import Footer from '../component/Footer';
import Home from '../screens/Home';
import OnPressFeed from '../screens/OnPressFeed';

const Tab = createBottomTabNavigator();
const options = {headerShown: false};

function BottomNavigator() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {position: 'absolute'}}}>
      <Tab.Screen
        name="Home"
        component={Footer}
        options={{
          tabBarHideOnKeyboard: true,
          // headerShown: false,
          // tabBarShowLabel: true,
          // tabBarHideOnKeyboard: true,
          // tabBarActiveTintColor: 'grey',
          // tabBarInactiveTintColor: '#585858',
          // tabBarIcon: '',
        }}
      />
      {/* <Tab.Screen
        name="OnPressFeed"
        component={OnPressFeed}
        options={{headerShown: true, tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Дашбоард"
        component={Dashboard}
        options={{
          headerShown: true,
          tabBarShowLabel: false,
          headerTitleAlign: 'center',
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default BottomNavigator;
