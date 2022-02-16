import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import FilterSearch from '../component/FilterSearch';
import Header from '../component/Header';

const OnPressFeed = props => {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View style={styles.container}>
          <Header style={styles.container} title={Header} />
          {/* <PriceRange style={styles.container} /> */}
        </View>
        <FilterSearch
          style={styles.container}
          title={FilterSearch}
          hideShow={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default OnPressFeed;
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
