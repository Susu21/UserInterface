import React, {useCallback, useEffect, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import HeaderMenu from '../component/HeaderMenu';
import DeviceInfo from 'react-native-device-info';
import Dashboard from '../component/Dashboard';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const OnPressFeed = props => {
  useEffect(() => {
    const isTablet = DeviceInfo.isTablet();
    console.log('isTablet*****', isTablet);
  });
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(200).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View>
          <Dashboard style={styles.container} />
          {/* <HeaderMenu style={styles.container} /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default OnPressFeed;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    marginTop: 10,

    backgroundColor: '#ffffff',
  },
  safearea: {
    backgroundColor: 'white',
    flex: 1,
  },
});
