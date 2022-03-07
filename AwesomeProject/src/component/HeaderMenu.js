import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {color} from 'react-native-reanimated';
import FoodMenu from './FoodMenu';
import About from './About';
const HeaderMenu = () => {
  return (
    <View>
      <View>
        <View
          style={{flexDirection: 'row', paddingHorizontal: 50, paddingTop: 10}}>
          <TouchableOpacity style={styles.SummerBtn}>
            <Text style={styles.SummerBtnText}>Sneacker</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SummerBtn}>
            <Text
              style={styles.SummerBtnText}
              onPress={() => {
                setState('FoodMenu');
              }}>
              Food
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.SummerBtn}>
            <Text style={styles.SummerBtnText}>Gadgets</Text>
          </TouchableOpacity>
        </View>
      </View>
      {state == 'Sneacker' && <About setState={setState} hideShow={false} />}
      {state == 'Food' && <FoodMenu />}
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
});
