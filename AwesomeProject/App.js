import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogBox} from 'react-native';
import BottomNavigator from './src/navigator/BottomNavigator';
import MyStack from './src/navigator/StackNavigator';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

// const myElement = createRef();
// const onModalClose = () => {
//   if (myElement && myElement.current) {
//     myElement.current.focus();
//   }
// };

const Home1 = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};
export default Home1;
