import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import FoodMenu from './FoodMenu';
import About from './About';
import Gadgets from './Gadgets';
const HeaderMenu = () => {
  const [state, setState] = useState('About');
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <TouchableOpacity
          style={state == 'About' ? styles.SubMenuHover1 : styles.SubMenuText}
          onPress={() => {
            setState('About');
          }}>
          <Text
            style={
              state == 'About' ? styles.SubMenuTextReq : styles.SubMenuTextReq1
            }>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            state == 'FoodMenu' ? styles.SubMenuHover1 : styles.SubMenuText
          }
          onPress={() => {
            setState('FoodMenu');
          }}>
          <Text
            style={
              state == 'FoodMenu'
                ? styles.SubMenuTextReq
                : styles.SubMenuTextReq1
            }>
            Food Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={state == 'Gadgets' ? styles.SubMenuHover1 : styles.SubMenuText}
          onPress={() => {
            setState('Gadgets');
          }}>
          <Text
            style={
              state == 'Gadgets'
                ? styles.SubMenuTextReq
                : styles.SubMenuTextReq1
            }>
            Gadgets
          </Text>
        </TouchableOpacity>
      </View>

      {state == 'About' && <About setState={setState} hideShow={false} />}
      {state == 'FoodMenu' && <FoodMenu setState={setState} hideShow={false} />}
      {state == 'Gadgets' && <Gadgets />}
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  SummerBtn: {
    width: 100,
    height: 30,
    marginRight: 5,
    borderRadius: 29,
    backgroundColor: 'black',
  },
  SummerBtnText: {
    alignSelf: 'center',
    paddingTop: 4,
    color: 'white',
  },
  SelectedBtn: {
    width: 100,
    height: 30,
    borderRadius: 29,
    marginLeft: 13,
    marginTop: 10,
    backgroundColor: 'black',
  },
  Button1: {
    width: 100,
    height: 30,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 29,

    borderColor: 'black',
    backgroundColor: 'black',
  },
  SelectedBtnTxt2: {
    width: 140,
    marginTop: 5,
    alignSelf: 'center',
    textAlign: 'center',

    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  Btn2Txt: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 12,
    color: 'white',
  },
  ConditionCon: {
    width: '100%',
    justifyContent: 'center',
    marginLeft: -5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  SubMenuHover1: {
    width: 80,
    height: 34,
    fontSize: 13,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  SubMenuText: {
    width: 80,
    height: 34,
    fontSize: 13,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
  },
  SubMenuTextReq: {
    height: 20,
    fontSize: 13,
    lineHeight: 18,
    color: '#EEEE9B',
    fontWeight: 'bold',
  },
  SubMenuTextReq1: {
    height: 20,
    fontSize: 13,
    lineHeight: 18,
    color: 'white',
  },
});
