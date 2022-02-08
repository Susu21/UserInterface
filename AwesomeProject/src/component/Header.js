import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <View>
      <Image
        style={styles.profilePic}
        source={{
          uri: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
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
