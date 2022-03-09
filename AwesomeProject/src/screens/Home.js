import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import FilterSearch from '../component/FilterSearch';
import Header from '../component/Header';
import About from '../component/About';
import HeaderMenu from '../component/HeaderMenu';
import FoodMenu from '../component/FoodMenu';
import Gadgets from '../component/Gadgets';
const OnPressFeed = props => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View>
          <HeaderMenu style={styles.container} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OnPressFeed;
const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90,
    marginTop: 10,

    backgroundColor: '#ffffff',
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
  SubMenuHover: {
    width: 90,
    height: 30,
    marginLeft: 20,

    fontSize: 13,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  SubMenuTextReq: {
    height: 18,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    color: '#1778F2',
    fontWeight: 'bold',
  },
  SubMenuText: {
    width: 70,
    height: 18,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 13,
    alignSelf: 'center',
    flexDirection: 'row',
    color: '#C5C5C5',
  },
  SubMenu: {
    width: 333,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
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
