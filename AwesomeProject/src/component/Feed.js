import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Requests from './Requests';
import FilterSearch from './FilterSearch';
import About from './About';
const Feed = props => {
  const [state, setState] = useState();
  const [isSelected, setIsSelected] = useState([]);
  return (
    <>
      <View style={styles.SubMenu}>
        <TouchableOpacity
          style={state == 'Feed' ? styles.SubMenuHover1 : styles.SubMenuText}
          onPress={() => {
            setState('Feed');
          }}>
          <Text style={state == 'Feed' ? styles.SubMenuTextReq : null}>
            Feed
          </Text>
        </TouchableOpacity>
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
          style={state == 'Request' ? styles.SubMenuHover1 : styles.SubMenuText}
          onPress={() => {
            setState('Request');
          }}>
          <Text style={state == 'Request' ? styles.SubMenuTextReq : null}>
            Requests
          </Text>
        </TouchableOpacity>
      </View>
      {state == 'Feed' && <FilterSearch setState={setState} hideShow={false} />}
      {state == 'About' && <About />}
      {state == 'Request' && <Requests />}
    </>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    width: 400,
    height: 50,
    marginTop: 10,

    backgroundColor: '#fff',
  },
  TextInput: {
    width: 165,
    height: 50,
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: '#EBF0FF',
    flexDirection: 'row',
    color: '#9098B1',
    backgroundColor: 'white',
  },
  PriceRange: {
    width: '100%',
    height: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 20,
    color: '#223263',
    letterSpacing: 0.5,
    fontSize: 14,

    borderColor: 'black',
  },
  TextInput1: {
    width: 160,
    height: 50,
    marginLeft: 170,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    color: '#9098B1',
    backgroundColor: 'white',
  },

  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 0.19,
    borderTopColor: '#ECEEF1',
    borderBottomColor: '#ECEEF1',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    marginTop: 1,
    flexDirection: 'row',
  },

  image: {
    width: 55,
    height: 55,
    borderRadius: 51.72,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  SubText: {
    width: 139,
    height: 18,
    fontSize: 13,
    lineHeight: 18,
    marginLeft: -260,
    marginTop: 30,
  },

  SubMenuTextReq: {
    height: 20,
    fontSize: 13,
    lineHeight: 18,
    color: '#1778F2',
    fontWeight: 'bold',
  },
  SubMenu: {
    width: 333,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 25,
    marginLeft: 25,
    marginTop: 35,
    backgroundColor: '#F5F5F5',
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
  SubMenuText1: {
    fontSize: 13,
    flexDirection: 'row',
    color: '#C5C5C5',
  },

  SubMenuHover1: {
    width: 80,
    height: 34,
    fontSize: 13,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },

  root: {
    alignItems: 'stretch',
    padding: 12,
    flex: 1,
    backgroundColor: '#555',
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 12,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  valueText: {
    width: 50,
    color: 'white',
    fontSize: 20,
  },
  Min: {
    width: 25,
    height: 25,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Caption/LargeBold',
    marginLeft: 20,
    marginTop: -53,
    color: '#9098B1',
  },
  Max: {
    width: 35,
    height: 18,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9098B1',
    marginTop: -53,
    marginLeft: 300,
  },
  slider: {
    width: '95%',
    height: 80,
    marginTop: -25,
    marginLeft: 8,
  },
  Condition: {
    width: '100%',
    height: 21,
    marginLeft: 15,
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
    color: '#223263',
  },
  FilterContainer: {
    justifyContent: 'flex-start',
    width: 375,
    height: 20,
    borderBottomWidth: 1,

    borderBottomColor: '#EBF0FF',
    display: 'flex',
  },
  FilterSearch: {
    width: 100,
    height: 19,
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    color: '#223263',
    letterSpacing: 0.5,
  },
  ConditionCon: {
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  Button1: {
    width: 59,
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  BtnTxt: {
    width: '100%',
    margin: 16,
    fontSize: 12,
    color: '#9098B1',
  },
  Btn1Txt: {
    width: '100%',
    marginTop: 16,
    marginLeft: 20,
    fontSize: 12,
    color: '#9098B1',
  },
  Btn2Txt: {
    width: '100%',
    marginTop: 16,
    marginLeft: 20,
    fontSize: 12,
    color: '#9098B1',
  },
  Button2: {
    width: 65,
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 6,
    color: '#40BFFF',
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  Button3: {
    width: 120,
    height: 50,
    marginTop: 10,
    marginLeft: 15,
    borderRadius: 6,
    color: '#40BFFF',
    borderWidth: 1,
    borderColor: '#EBF0FF',
  },
  BtnByFt1: {
    width: 99,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },
  BtnByFt2: {
    width: 129,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },
  BtnByFt3: {
    width: 81,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },

  BtnByFt4: {
    width: 98,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },

  BtnByFt5: {
    width: 123,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },
  BtnByFt6: {
    width: 81,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },
  BtnByFt7: {
    width: 129,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },

  BtnByFt8: {
    width: 77,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },

  BtnByFt9: {
    width: 70,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    borderRadius: 6,
  },
  BtnTxTByF1: {
    marginTop: 14,
    marginLeft: 18,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF2: {
    width: '100%',
    marginTop: 14,
    marginLeft: 23,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF3: {
    marginTop: 14,
    marginLeft: 19,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF4: {
    width: '100%',
    marginTop: 14,
    marginLeft: 18,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF5: {
    marginTop: 14,
    marginLeft: 22,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF6: {
    width: '100%',
    marginTop: 14,
    marginLeft: 20,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF7: {
    marginTop: 14,
    marginLeft: 24,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF8: {
    width: '100%',
    marginTop: 14,
    marginLeft: 19,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF9: {
    marginTop: 14,
    marginLeft: 22,
    color: '#9098B1',
    fontSize: 12,
  },
  Apply: {
    width: 343,
    height: 57,
    marginLeft: 22,
    marginTop: 40,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
  },
  ApplyTxt: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 18,
    marginLeft: 160,
  },
  SelectedBtn: {
    width: 130,
    height: 50,
    borderRadius: 5,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtnTxt: {
    marginLeft: 45,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#40BFFF',
  },
  SelectedBtnTxt1: {
    marginLeft: 22,
    marginTop: 14,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#40BFFF',
  },
  Close: {
    marginTop: 4,
    marginLeft: 10,
    letterSpacing: 1,
  },
  ScrollView: {
    backgroundColor: 'black',
  },
});
