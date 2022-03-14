import React, {useCallback, useState} from 'react';
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import HeaderMenu from '../component/HeaderMenu';
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const OnPressFeed = props => {
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
});
