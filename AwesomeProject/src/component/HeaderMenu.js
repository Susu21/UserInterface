import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

import FoodMenu from './FoodMenu';
import About from './About';
import Gadgets from './Gadgets';
const HeaderMenu = () => {
  const [state, setState] = useState('About');
  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity
          style={state == 'About' ? styles.SubMenuHover1 : styles.SubMenuText}
          onPress={() => {
            setState('About');
          }}>
          <Text style={state == 'About' ? styles.SubMenuTextReq : null}>
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
          <Text style={state == 'FoodMenu' ? styles.SubMenuTextReq : null}>
            Food Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={state == 'Gadgets' ? styles.SubMenuHover1 : styles.SubMenuText}
          onPress={() => {
            setState('Gadgets');
          }}>
          <Text style={state == 'Gadgets' ? styles.SubMenuTextReq : null}>
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
  },
  SubMenuTextReq: {
    height: 20,
    fontSize: 13,
    lineHeight: 18,
    color: '#1778F2',
    fontWeight: 'bold',
  },
});
