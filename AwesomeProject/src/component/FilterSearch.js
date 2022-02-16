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
import {useNavigation} from '@react-navigation/native';

const Feed = props => {
  const [isSelected, setIsSelected] = useState([]);
  const navigation = useNavigation();
  const [state, setState] = useState();

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
  const [conditionSel, setConditionSel] = useState();
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
        {props.hidePR && (
          <View>
            <Text style={styles.PriceRange}>Price Range</Text>
            <View style={styles.TextInput}>
              <TextInput value={low ? '$' + low.toString() : ''}></TextInput>
              <View style={styles.TextInput1}>
                <TextInput
                  value={high ? '$' + high.toString() : ''}></TextInput>
              </View>
            </View>
            <Slider
              style={styles.slider}
              min={min}
              max={max}
              step={0}
              disableRange={rangeDisabled}
              floatingLabel={floatingLabel}
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleClick}
            />
          </View>
        )}
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={styles.Min}>MIN</Text>
          <Text style={styles.Max}>MAX</Text>
        </View>
        {!props.hide && (
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
        )}
        {props.hideShow && (
          <View>
            <View>
              <Text style={styles.Condition}>Buying Format</Text>
              <View style={styles.ConditionCon}>
                <TouchableOpacity
                  style={
                    isSelected?.includes('All Listings')
                      ? styles.SelectedBtn99
                      : styles.BtnByFt1
                  }
                  onPress={() => setActive('All Listings')}>
                  <Text
                    style={
                      isSelected?.includes('All Listings')
                        ? styles.SelectedBtnTxt1
                        : styles.BtnTxTByF1
                    }>
                    All Listings
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Accepts Offers')
                      ? styles.SelectedBtn129
                      : styles.BtnByFt2
                  }
                  onPress={Button3 => setActive('Accepts Offers')}>
                  <Text
                    style={
                      isSelected?.includes('Accepts Offers')
                        ? styles.SelectedBtnTxt5
                        : styles.BtnTxTByF2
                    }>
                    Accepts Offers
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Auction')
                      ? styles.SelectedBtn81
                      : styles.BtnByFt3
                  }
                  onPress={Button3 => setActive('Auction')}>
                  <Text
                    style={
                      isSelected?.includes('Auction')
                        ? styles.SelectedBtnTxt6
                        : styles.BtnTxTByF3
                    }>
                    Auction
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Buy It Now')
                      ? styles.SelectedBtn98
                      : styles.BtnByFt4
                  }
                  onPress={Button3 => setActive('Buy It Now')}>
                  <Text
                    style={
                      isSelected?.includes('Buy It Now')
                        ? styles.SelectedBtnTxt6
                        : styles.BtnTxTByF4
                    }>
                    Buy It Now
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Classified Ads')
                      ? styles.SelectedBtn123
                      : styles.BtnByFt5
                  }
                  onPress={Button3 => setActive('Classified Ads')}>
                  <Text
                    style={
                      isSelected?.includes('Classified Ads')
                        ? styles.SelectedBtnTxt7
                        : styles.BtnTxTByF5
                    }>
                    Classified Ads
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.Condition}>Item Location</Text>
              <View style={styles.ConditionCon}>
                <TouchableOpacity
                  style={
                    isSelected?.includes('US Only')
                      ? styles.SelectedBtn81
                      : styles.BtnByFt6
                  }
                  onPress={Button3 => setActive('US Only')}>
                  <Text
                    style={
                      isSelected?.includes('US Only')
                        ? styles.SelectedBtnTxt7
                        : styles.BtnTxTByF5
                    }>
                    US Only
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('North America')
                      ? styles.SelectedBtn129
                      : styles.BtnByFt7
                  }
                  onPress={Button3 => setActive('North America')}>
                  <Text
                    style={
                      isSelected?.includes('North America')
                        ? styles.SelectedBtnTxt7
                        : styles.BtnTxTByF5
                    }>
                    North America
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Europe')
                      ? styles.SelectedBtn77
                      : styles.BtnByFt8
                  }
                  onPress={Button3 => setActive('Europe')}>
                  <Text
                    style={
                      isSelected?.includes('Europe')
                        ? styles.SelectedBtnTxt7
                        : styles.BtnTxTByF5
                    }>
                    Europe
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Asia')
                      ? styles.SelectedBtn70
                      : styles.BtnByFt9
                  }
                  onPress={Button3 => setActive('Asia')}>
                  <Text
                    style={
                      isSelected?.includes('Asia')
                        ? styles.SelectedBtnTxt7
                        : styles.BtnTxTByF5
                    }>
                    Asia
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {conditionSel == 'New' && (
          <Feed
            setState={setState}
            hideShow={true}
            hide={false}
            hideBt={true}
            hidePR={true}
          />
        )}
        {conditionSel == 'Used' && (
          <Feed
            setState={setState}
            hideShow={true}
            hide={true}
            hideBt={true}
            hidePR={true}
          />
        )}
        {conditionSel == 'Not Specified' && (
          <Feed
            setState={setState}
            hideShow={true}
            hide={true}
            hideBt={true}
            hidePR={true}
          />
        )}

        {!props.hideBt && (
          <View>
            <TouchableOpacity
              style={styles.Apply}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.ApplyTxt}>Apply</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
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
    height: 18,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    color: '#1778F2',
    fontWeight: 'bold',
  },
  SubMenu: {
    width: 333,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
  SubMenuText: {
    width: 70,
    height: 18,
    marginLeft: 20,
    fontSize: 13,
    alignSelf: 'center',
    flexDirection: 'row',
    color: '#C5C5C5',
  },
  SubMenuHover: {
    width: 90,
    height: 30,
    marginLeft: 25,
    marginTop: 10,
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
    marginTop: -55,
    color: '#9098B1',
  },
  Max: {
    width: 35,
    height: 18,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9098B1',
    marginTop: -55,
    marginLeft: 308,
  },
  slider: {
    width: '99%',
    height: 60,
    marginTop: 5,
    marginLeft: 5,
  },
  Condition: {
    width: '100%',
    height: 21,
    marginLeft: 20,
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
    marginLeft: 10,
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
    marginLeft: 5,
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
    marginLeft: 18,
    fontSize: 12,
    color: '#9098B1',
  },
  Btn2Txt: {
    marginTop: 16,
    marginLeft: 16,
    fontSize: 12,
    color: '#9098B1',
  },
  Btn3Txt: {
    marginTop: 16,
    marginLeft: 22,
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
    marginTop: 15,
    marginLeft: 18,
    color: '#9098B1',
    fontSize: 12,
  },
  BtnTxTByF2: {
    marginTop: 15,
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
    width: 62,
    height: 50,
    borderRadius: 5,
    marginLeft: 13,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn70: {
    width: 70,
    height: 50,
    borderRadius: 5,
    marginLeft: 13,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn77: {
    width: 77,
    height: 50,
    borderRadius: 5,
    marginLeft: 11,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn65: {
    width: 66,
    height: 50,
    borderRadius: 5,
    marginLeft: 13,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn120: {
    width: 120,
    height: 50,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn59: {
    width: 59,
    height: 50,
    borderRadius: 5,
    marginLeft: 15,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn99: {
    width: 99,
    height: 47,
    borderRadius: 5,
    marginLeft: 11,
    marginTop: 11,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn129: {
    width: 128,
    height: 48,
    borderRadius: 5,
    marginLeft: 11,
    marginTop: 11,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn123: {
    width: 128,
    height: 48,
    borderRadius: 5,
    marginLeft: 11,
    marginTop: 11,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn81: {
    width: 81,
    height: 47,
    borderRadius: 5,
    marginLeft: 11,
    marginTop: 11,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtn98: {
    width: 98,
    height: 47,
    borderRadius: 5,
    marginLeft: 11,
    marginTop: 11,
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
    marginLeft: 17,
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  SelectedBtnTxt2: {
    marginLeft: 19,
    marginTop: 17,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  SelectedBtnTxt3: {
    marginLeft: 23,
    marginTop: 17,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  SelectedBtnTxt4: {
    marginLeft: 21,
    marginTop: 17,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  SelectedBtnTxt5: {
    marginLeft: 23,
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  SelectedBtnTxt6: {
    marginLeft: 18,
    marginTop: 14,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  SelectedBtnTxt7: {
    marginLeft: 21,
    marginTop: 14,
    fontWeight: 'bold',
    fontSize: 12,
    color: '#40BFFF',
  },
  Close: {
    marginTop: 4,
    marginLeft: 20,
    letterSpacing: 1,
  },
  ScrollView: {
    backgroundColor: 'black',
  },
});
