import {useState, useEffect, useRef} from 'react';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {Text, View} from 'react-native';
function TestCounter() {
  const [inputValue, setInputValue] = useState('');
  const count = '';

  useEffect(() => {
    count === count + 1;
  });

  return (
    <>
      <TextInput
        style={{
          backgroundColor: 'black',
          color: 'cyan',
        }}
        type="text"
        value={inputValue}
        onChangeText={value => setInputValue(value)}
      />
      <View>
        <Text>Render Count: {count}</Text>
      </View>
    </>
  );
}

export default TestCounter;
