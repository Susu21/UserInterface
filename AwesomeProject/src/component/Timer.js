import {StyleSheet, Text, View} from 'react-native';
import React, {Component, useState} from 'react';
import CountDown from 'react-native-countdown-component';
import {color} from 'react-native-reanimated';
export class Timer extends Component {
  componentDidMount() {
    console.log('this.props.until', this.props.until);
  }
  render() {
    return (
      <CountDown
        style={{marginTop: 30, marginRight: 180}}
        until={this.props.until}
        digitStyle={{backgroundColor: 'white', color: 'white'}}
        onFinish={() => alert('Sale Is Finished')}
        digitTxtStyle={{color: 'black'}}
        size={15}
        timeToShow={['H', 'M', 'S']}
        time
        onChange={this.props.setTimer}
      />
    );
  }
}

export default Timer;
