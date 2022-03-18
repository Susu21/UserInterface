import {
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Icons from 'react-native-vector-icons/FontAwesome';
const Footer = () => {
  const lastNameRef = useRef();
  const [text, onChangeText] = useState('');

  return (
    <KeyboardAvoidingView
      style={{
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        height: '15%',
        width: '100%',
        flexDirection: 'row',
      }}
      behavior={'height'}>
      <View style={styles.container}>
        <TouchableOpacity style={{marginLeft: '5%'}}>
          <Icons
            name="camera"
            style={{
              fontSize: 18,
              top: 40,

              position: 'absolute',
              color: '#585858',
            }}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder="Сэтгэгдэл үлдээх"
          multiline={true}
        />
        <TouchableOpacity>
          <Icons
            name="send"
            style={{
              position: 'absolute',
              right: 45,
              bottom: 10,
              fontSize: 18,
              color: '#699BF7',
            }}
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: '5%',
  },
  //   TextInput: {
  //     alignSelf: 'center',
  //     borderRadius: 25,
  //     paddingLeft: '5%',
  //     backgroundColor: '#e8eaed',
  //     width: '75%',
  //     height: '35%',
  //     marginLeft: '12%',
  //     bottom: '7%',
  //     justifyContent: 'space-around',
  //   },
  textInput: {
    height: 40,
    width: '80%',
    marginLeft: '14%',
    marginTop: '7%',
    paddingLeft: '5%',
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 30,
  },
});

// import React from 'react';
// import {
//   View,
//   KeyboardAvoidingView,
//   TextInput,
//   StyleSheet,
//   Text,
//   TouchableWithoutFeedback,
//   Button,
//   Keyboard,
// } from 'react-native';
// const KeyboardAvoidingComponent = () => {
//   return (
//     <KeyboardAvoidingView behavior="padding" style={styles.container}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <View style={styles.inner}>
//           <Text style={styles.header}>Header</Text>
//           <TextInput placeholder="Username" style={styles.textInput} />
//           <View style={styles.btnContainer}>
//             <TextInput placeholder="Username" style={styles.textInput} />
//             <Button title="Submit" onPress={() => null} />
//           </View>
//         </View>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: 'space-around',
//   },
//   header: {
//     fontSize: 36,
//     marginBottom: 48,
//   },
//   textInput: {
//     height: 40,
//     borderColor: '#000000',
//     borderBottomWidth: 1,
//     marginBottom: 36,
//   },
//   btnContainer: {
//     backgroundColor: 'white',
//     marginTop: 12,
//   },
// });
// export default KeyboardAvoidingComponent;
