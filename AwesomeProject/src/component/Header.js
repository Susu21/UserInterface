import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = props => {
  const navigation = useNavigation();

  return (
    <View>
      <Image
        style={styles.profilePic}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU',
        }}
      />

      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  profilePic: {
    height: 88,
    width: 88,
    marginTop: 80,
    marginLeft: 25,
    borderRadius: 82.76,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    width: 89,
    height: 34,
    marginTop: 25,
    marginLeft: 30,
    opacity: 87,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 28,
    fontFamily: 'Inter',
    lineHeight: 34,
  },
});
