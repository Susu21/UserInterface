import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Test from '../component/Test';
const onPressTest = props => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <Test style={styles.container} title={Test} />
      </ScrollView>
    </SafeAreaView>
  );
};
export default onPressTest;
const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 180,

    backgroundColor: 'white',
  },
  safearea: {
    backgroundColor: 'white',
    flex: 1,
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
    marginTop: 6,
    marginLeft: 125,
    opacity: 87,
    fontSize: 16,
    lineHeight: 22,
  },
});
{
  /* <SafeAreaView style={styles.safearea}> */
}
{
  /* <ScrollView>
          <Header style={styles.container} title={Header} />
          <Text style={styles.userName}>Ronda Rhousey</Text>
          <Text style={styles.Role}>Product Designer</Text>
          <Text style={styles.SysName}>@iamronda</Text>
          <Feed style={styles.container} title={Feed} />
        </ScrollView> */
}
{
  /* </SafeAreaView> */
}
