import React, {useState} from 'react';
import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Feed from './src/component/Feed';
import Header from './src/component/Header';
import Flist from './src/component/Requests';
import {ScrollView} from 'react-native-gesture-handler';
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
  const [state, setState] = useState('');

  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <Header style={styles.container} title={Header} />
        <Text style={styles.userName}>Ronda Rhousey</Text>
        <Text style={styles.Role}>Product Designer</Text>
        <Text style={styles.SysName}>@iamronda</Text>
        <Feed style={styles.container} title={Feed} />
        <Flist style={styles.container} title={Flist} />
        <View style={[styles.container]}>
          <View style={styles.SubMenu}>
            <TouchableOpacity
              style={state == 'Feed' ? styles.SubMenuHover : styles.SubMenuText}
              onPress={() => {
                setState('Feed');
              }}>
              <Text style={state == 'Feed' ? styles.SubMenuTextReq : null}>
                Feed
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                state == 'About' ? styles.SubMenuHover : styles.SubMenuText
              }
              onPress={() => {
                setState('About');
              }}>
              <Text style={state == 'About' ? styles.SubMenuTextReq : null}>
                About
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                state == 'Request' ? styles.SubMenuHover : styles.SubMenuText
              }
              onPress={() => {
                setState('Request');
              }}>
              <Text style={state == 'Request' ? styles.SubMenuTextReq : null}>
                Requests
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home1;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90,
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  safearea: {
    backgroundColor: '#fff',
  },
  Role: {
    width: 126,
    height: 22,
    marginTop: 3,
    marginLeft: 125,
    opacity: 87,
    fontSize: 16,
    lineHeight: 22,
    color: '#454545',
  },
  userName: {
    width: 150,
    height: 24,
    marginTop: 30,
    marginLeft: 125,
    opacity: 87,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  SysName: {
    width: 90,
    height: 22,
    marginTop: 10,
    marginLeft: 125,
    opacity: 87,
    fontSize: 16,
    lineHeight: 22,
  },
});
