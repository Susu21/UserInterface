import * as React from 'react';
import OnPressFeed from '../screens/OnPressFeed';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import onPressTest from '../screens/OnPressTest';
import Test from '../component/Test';
import FoodMenu from '../component/FoodMenu';
const Stack = createNativeStackNavigator();

const MyStack = props => {
  console.log('props.timer', props.timer);
  return (
    <Stack.Navigator
      initialRouteName="OnPressTest"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={FoodMenu}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OnPressFeed" component={OnPressFeed} />
      {/* <Stack.Screen
        name="OnPressTest"
        component={onPressTest}
        options={{headerShown: true}}
      /> */}
    </Stack.Navigator>
  );
};
export default MyStack;
