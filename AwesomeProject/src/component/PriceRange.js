import React, {useCallback, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Label from './Label';
import Notch from './Notch';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Thumb from './Thumbs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const PriceRange = props => {
  const [isSelected, setIsSelected] = useState([]);
  const navigation = useNavigation();

  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [floatingLabel, setFloatingLabel] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);
  const handleClick = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  const [conditionSel, setConditionSel] = useState('');
  const setActive = name => {
    if (isSelected.includes(name)) {
      const arr = [...isSelected];
      const index = arr.indexOf(name);
      arr.splice(index, 1);
      setIsSelected(arr);
    } else {
      setIsSelected(prev => [...prev, name]);
    }
  };
  console.log('isSelected', isSelected);

  return (
    <>
      <ScrollView>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Icon
              name="arrow-left"
              style={{
                fontSize: 15,
                marginTop: 20,
                marginLeft: 15,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.FilterContainer}></Text>
        <Text style={styles.PriceRange}>Price Range</Text>
        <View style={styles.TextInput}>
          <TextInput value={low ? '$' + low.toString() : ''}></TextInput>
          <View style={styles.TextInput1}>
            <TextInput value={high ? '$' + high.toString() : ''}></TextInput>
          </View>
        </View>
        <Slider
          style={styles.slider}
          min={min}
          max={max}
          step={1}
          disableRange={rangeDisabled}
          floatingLabel={floatingLabel}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleClick}
        />

        {/* <Slider
            style={styles.slider}
            min={min}
            max={max}
            step={1}
            disableRange={rangeDisabled}
            floatingLabel={floatingLabel}
            renderThumb={renderThumb}
            renderRail={renderRail}
            renderRailSelected={renderRailSelected}
            renderLabel={renderLabel}
            renderNotch={renderNotch}
            onValueChanged={handleClick}
          /> */}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.Min}>MIN</Text>
          <Text style={styles.Max}>MAX</Text>
        </View>
        <View>
          <Text style={styles.Condition}>Condition</Text>
          <View style={styles.ConditionCon}>
            <TouchableOpacity
              style={
                conditionSel == 'New' ? styles.SelectedBtn : styles.Button1
              }
              onPress={New => setConditionSel('New')}>
              <Text
                style={
                  conditionSel == 'New'
                    ? styles.SelectedBtnTxt2
                    : styles.Btn2Txt
                }>
                New
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                conditionSel == 'Used' ? styles.SelectedBtn65 : styles.Button2
              }
              onPress={Used => setConditionSel('Used')}>
              <Text
                style={
                  conditionSel == 'Used'
                    ? styles.SelectedBtnTxt4
                    : styles.Btn1Txt
                }>
                Used
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                conditionSel == 'Not Specified'
                  ? styles.SelectedBtn120
                  : styles.Button3
              }
              onPress={() => setConditionSel('Not Specified')}>
              <Text
                style={
                  conditionSel == 'Not Specified'
                    ? styles.SelectedBtnTxt3
                    : styles.Btn3Txt
                }>
                Not Specified
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};
export default PriceRange;
const styles = StyleSheet.create({
  FilterContainer: {
    justifyContent: 'flex-start',
    width: 375,
    height: 25,

    borderBottomColor: '#EBF0FF',
  },
  PriceRange: {
    width: '100%',
    height: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    color: '#223263',
    letterSpacing: 0.5,
    fontSize: 14,

    borderColor: 'black',
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
  Min: {
    width: 25,
    height: 25,
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Caption/LargeBold',
    marginLeft: 26,
    marginTop: -30,
    color: '#9098B1',
  },
  Max: {
    width: 35,
    height: 18,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9098B1',
    marginTop: -33,
    marginLeft: 290,
  },
  slider: {
    width: '95%',
    height: 80,
    marginTop: -10,
    marginLeft: 10,
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
  ConditionCon: {
    width: '100%',
    marginBottom: 10,
    marginLeft: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  SelectedBtn: {
    width: 62,
    height: 50,
    borderRadius: 5,
    marginLeft: 13,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
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
  SelectedBtnTxt2: {
    marginLeft: 19,
    marginTop: 17,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  Btn2Txt: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 12,
    color: '#9098B1',
  },
  SelectedBtn65: {
    width: 66,
    height: 50,
    borderRadius: 5,
    marginLeft: 13,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
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
  SelectedBtnTxt4: {
    marginLeft: 21,
    marginTop: 17,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  Btn1Txt: {
    width: '100%',
    marginTop: 16,
    marginLeft: 18,
    fontSize: 12,
    color: '#9098B1',
  },
  SelectedBtn120: {
    width: 120,
    height: 50,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
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
  valueText: {
    width: 50,
    color: 'white',
    fontSize: 20,
  },
  SelectedBtnTxt3: {
    marginLeft: 23,
    marginTop: 17,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  Btn3Txt: {
    marginTop: 16,
    marginLeft: 22,
    fontSize: 12,
    color: '#9098B1',
  },
  container: {
    width: 400,
    height: 50,

    flex: 1,
    backgroundColor: 'white',
  },
});
