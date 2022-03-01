import {useState, useEffect, useRef} from 'react';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
function App() {
  const [inputValue, setInputValue] = useState('');
  //   const count = useRef(0);
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  let ASD = 0;
  useEffect(() => {
    setTimeout(() => {
      ASD++;
      console.log('ASD', ASD);
      console.log('count', count);
      setCount(count => count + 1);
    }, 1000);
  });

  return (
    <View>
      <Text>I've rendered {count} times!</Text>
      <TouchableOpacity
        style={styles.Apply}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.ApplyTxt}>Apply</Text>
      </TouchableOpacity>
    </View>
  );

  //  {/*      <View>
  //         <TextInput
  //           style={{
  //             backgroundColor: 'black',
  //             color: 'cyan',
  //           }}
  //           type="text"
  //           value={inputValue}
  //           onChangeText={value => {
  //             setInputValue(value);
  //             count.current = value;
  //           }}
  //         />
  //         <View>
  //           <Text>Render Count: {count.current}</Text>
  //         </View>
  //         <View>
  //           <TouchableOpacity
  //             style={styles.Apply}
  //             onPress={() => navigation.navigate('Home')}>
  //             <Text style={styles.ApplyTxt}>Apply</Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View> */}
}

export default App;
const styles = StyleSheet.create({
  Apply: {
    width: 343,
    height: 57,
    marginLeft: 22,
    marginTop: 40,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
  },
  ApplyTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 18,
    marginLeft: 160,
  },
});
