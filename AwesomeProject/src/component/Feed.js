import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import About from './About';
import FilterSearch from './FilterSearch';
import Requests from './Requests';
const Feed = props => {
  const [state, setState] = useState();
  const [isSelected, setIsSelected] = useState([]);
  const [timer, setTimer] = useState(60000);

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
      {state == 'About' && (
        <About setState={setState} timer={timer} setTimer={setTimer} />
      )}
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
});
