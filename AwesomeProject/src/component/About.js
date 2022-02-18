import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const About = () => {
  const image = {
    uri: 'https://c0.wallpaperflare.com/preview/28/600/957/pair-of-black-white-and-red-air-jordan-1-shoes.jpg',
  };

  return (
    <ScrollView>
      <View style={styles.Header}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          borderRadius={5}
          style={styles.image}>
          <Text style={styles.HeaderText}>Super Flash Sale 50% Off</Text>
        </ImageBackground>
        <View>
          <View style={styles.HeaderClockHour}>
            <View style={styles.HeaderClockMin}>
              <Text style={styles.HeaderClockHourTxt}>08</Text>
            </View>
            <View>
              <Text style={styles.HourMinBetween}>:</Text>
            </View>
            <View style={styles.HeaderClockMin}>
              <Text style={styles.HeaderClockHourTxt}>34</Text>
            </View>
            <View>
              <Text style={styles.HourMinBetween}>:</Text>
            </View>
            <View style={styles.HeaderClockMin}>
              <Text style={styles.HeaderClockHourTxt}>15</Text>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 10,

          paddingHorizontal: 25,
          justifyContent: 'space-around',
        }}>
        <View style={styles.BotContainer}>
          <Text style={{color: 'white'}}>HAHAs</Text>
        </View>
        <View style={styles.BotContainer}>
          <Text style={{color: 'white'}}>HAHAs</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  Header: {
    width: 343,
    height: 207,
    marginTop: 15,
    marginLeft: 25,
    backgroundColor: 'black',
    borderRadius: 5,
  },
  image: {
    flex: 1,
    height: 207,
    width: 343,

    justifyContent: 'center',
  },
  HeaderText: {
    width: 209,
    height: 70,
    marginBottom: 30,
    marginLeft: 20,
    fontSize: 25,
    lineHeight: 36,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: 'white',
  },
  HeaderClockHour: {
    height: 41,
    marginLeft: 15,
    marginBottom: 35,
    borderRadius: 5,

    flexDirection: 'row',
  },
  HeaderClockMin: {
    width: 42,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },

  HeaderClockHourTxt: {
    fontWeight: 'bold',
    color: '#223263',
  },

  HeaderClockMinTxt: {
    height: 42,
    width: 40,
    marginTop: 10,
    marginLeft: 13,
    borderRadius: 5,
    fontWeight: 'bold',
    color: '#223263',
    backgroundColor: '',
  },
  HourMinBetween: {
    height: 40,
    marginTop: 10,
    marginHorizontal: 3,
    fontSize: 14,
    color: 'white',
  },
  BotContainer: {
    width: 165,
    height: 282,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
});
