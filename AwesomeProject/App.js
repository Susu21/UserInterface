import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {LogBox} from 'react-native';
import App from './src/component/Test';
import Test from './src/component/Test';
import TestCounter from './src/component/TestCounter';
import MyStack from './src/Navigator/StackNavigator';
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
      <MyStack />
    </NavigationContainer>
  );
};
export default Home1;
