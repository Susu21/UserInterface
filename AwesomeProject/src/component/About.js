import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <ScrollView>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Super Flash Sale 50% Off</Text>
        <View style={styles.HeaderClockHour}>
          <Text style={styles.HeaderClockHourTxt}>08</Text>
          <View>
            <Text style={styles.HourMinBetween}>:</Text>
          </View>
          <View style={styles.HeaderClockMin}>
            <Text style={styles.HeaderClockMinTxt}>34</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  Header: {
    width: 343,
    height: 206,
    marginTop: 15,
    backgroundColor: 'gray',
  },
  HeaderText: {
    width: 209,
    marginTop: 30,
    marginLeft: 20,
    fontSize: 25,
    lineHeight: 36,
    letterSpacing: 0.5,
    fontWeight: 'bold',
  },
  HeaderClockHour: {
    width: 42,
    height: 41,
    marginTop: 25,
    marginLeft: 20,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  HeaderClockMin: {
    width: 42,
    height: 41,
    marginLeft: 30,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: 'pink',
  },
  HeaderClockHourTxt: {
    marginLeft: 13,
    fontWeight: 'bold',
    color: '#223263',
    alignSelf: 'center',
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
    marginLeft: 2,
    color: '#fff',
  },
});
