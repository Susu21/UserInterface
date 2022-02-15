import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import Slider from 'rn-range-slider';
import React, {useCallback, useState} from 'react';
import Label from '../component/Label';

const OnPressFeed = props => {
  const [conditionSel, setConditionSel] = useState('');

  const [state, setState] = useState();
  const [low, setLow] = useState();
  const [high, setHigh] = useState();
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(value => <Label text={value} />, []);
  const renderNotch = useCallback(() => <Notch />, []);

  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [floatingLabel, setFloatingLabel] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10000);
  const handleClick = useCallback((low, high) => {
    setLow(low);
    setHigh(high);
  }, []);
  return (
    <View>
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
      <View style={styles.horizontalContainer}>
        <Text style={styles.valueText}>{'low'}</Text>
        <Text style={styles.valueText}>{'high'}</Text>
      </View>

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
            style={conditionSel == 'New' ? styles.SelectedBtn : styles.Button1}
            onPress={New => setConditionSel('New')}>
            <Text
              style={
                conditionSel == 'New' ? styles.SelectedBtnTxt2 : styles.Btn2Txt
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
                conditionSel == 'Used' ? styles.SelectedBtnTxt4 : styles.Btn1Txt
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
    </View>
  );
};
export default OnPressFeed;

const styles = StyleSheet.create({
  FilterContainer: {
    justifyContent: 'flex-start',
    width: 375,
    height: 250,
    borderBottomWidth: 1,

    borderBottomColor: '#EBF0FF',
    display: 'flex',
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
    marginLeft: 22,
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
});
{
  /* <SafeAreaView style={styles.safearea}> */
}
{
  /* <ScrollView>
          <Header style={styles.container} title={Header} />
          <Text style={styles.userName}>Ronda Rhousey</Text>
          <Text style={styles.Role}>Product Designer</Text>
          <Text style={styles.SysName}>@iamronda</Text>
          <Feed style={styles.container} title={Feed} />
        </ScrollView> */
}
{
  /* </SafeAreaView> */
}
