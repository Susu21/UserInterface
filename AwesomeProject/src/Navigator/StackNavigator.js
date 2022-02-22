import * as React from 'react';
import OnPressFeed from '../screens/OnPressFeed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const MyStack = props => {
  console.log('props.timer', props.timer);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="OnPressFeed" component={OnPressFeed} />
    </Stack.Navigator>
  );
};
export default MyStack;
