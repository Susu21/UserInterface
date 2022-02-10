import {
  View,
  Text,
  LogBox,
  Alert,
  Modal,
  Button,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, createRef, useCallback} from 'react';

import 'react-native-gesture-handler';
import Slider from 'rn-range-slider';
import 'react-native-gesture-handler';
import Label from './src/component/Label';
import Notch from './src/component/Notch';
import Rail from './src/component/Rail';
import RailSelected from './src/component/RailSelected';
import Thumb from './src/component/Thumbs';
import FirstScene from './src/component/FirstScene';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
import Header from './src/component/Header';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {commentRegex} from 'convert-source-map';
import {auto} from 'async';

const Item = ({item}) => {
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: item.image}} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.SubText}>{item.subtitle}</Text>
    </View>
  );
};
const renderItem = ({item, index}) => <Item item={item} />;
const DATA = [
  {
    id: 1,
    title: 'Mohan sent you a request               2h',
    subtitle: '24 Mutual connection',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ikNsqr2afmXK__jOj5KWrk_GRvqQfA8E3cs9hTuATegoL9KBpDA8edTNXxNDgjv6Wd4&usqp=CAU',
  },
  {
    id: 2,
    title: 'Joshuah sent you a request             7d',
    subtitle: '24 Mutual connection',
    image:
      'https://www.aayag.com/wp-content/uploads/2021/08/free-profile-photo-whatsapp-3.png',
  },
  {
    id: 3,
    title: 'Margarita sent you a request          18h',
    subtitle: '24 Mutual connection',
    image:
      'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 4,
    title: 'Timmy sent you a request              34m',
    subtitle: '24 Mutual connection',
    image:
      'https://media.istockphoto.com/photos/man-looking-picture-id1168966537?b=1&k=20&m=1168966537&s=170667a&w=0&h=11_v7GkTBvrMpto6iVO5oSI8VjxL5GdlraTLK_LizwM=',
  },
  {
    id: 5,
    title: 'Jaguar sent you a request              15s',
    subtitle: '24 Mutual connection',
    image:
      'https://image.shutterstock.com/image-photo/young-adult-profile-picture-red-260nw-1655747050.jpg',
  },
];

const myElement = createRef();
const onModalClose = () => {
  if (myElement && myElement.current) {
    myElement.current.focus();
  }
};
const Home1 = () => {
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [floatingLabel, setFloatingLabel] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(1000);
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
  const toggleRangeEnabled = useCallback(
    () => setRangeDisabled(!rangeDisabled),
    [rangeDisabled],
  );
  const setMinTo50 = useCallback(() => setMin(50), []);
  const setMinTo0 = useCallback(() => setMin(0), []);
  const setMaxTo100 = useCallback(() => setMax(100), []);
  const setMaxTo500 = useCallback(() => setMax(500), []);
  const toggleFloatingLabel = useCallback(
    () => setFloatingLabel(!floatingLabel),
    [floatingLabel],
  );
  const [isSelected, setIsSelected] = useState([]);
  const [isSelected1, setIsSelected1] = useState();
  const [isSelected2, setIsSelected2] = useState();
  const [isSelected3, setIsSelected3] = useState();
  const [isShow, setIsShow] = useState(false);
  const [value, setValue] = useState();
  const [state, setState] = useState('');

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
    <SafeAreaView style={styles.safearea}>
      <Header style={styles.container} title={Header} />
      <Text style={styles.userName}>Ronda Rhousey</Text>
      <Text style={styles.Role}>Product Designer</Text>
      <Text style={styles.SysName}>@iamronda</Text>
      <View style={[styles.container]}>
        <View style={styles.SubMenu}>
          <TouchableOpacity
            style={state == 'Feed' ? styles.SubMenuHover : styles.SubMenuText}
            onPress={() => {
              setIsShow(true);
            }}>
            <Text style={state == 'Feed' ? styles.SubMenuTextReq : null}>
              Feed
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={state == 'About' ? styles.SubMenuHover : styles.SubMenuText}
            onPress={() => {
              setState('About');
            }}>
            <Text style={state == 'About' ? styles.SubMenuTextReq : null}>
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              state == 'Request' ? styles.SubMenuHover : styles.SubMenuText
            }
            onPress={() => {
              setState('Request');
            }}>
            <Text style={state == 'Request' ? styles.SubMenuTextReq : null}>
              Requests
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <SafeAreaView>
        {state == 'Request' && (
          <FlatList
            contentContainerStyle={{
              flexDirection: 'column',
              justifyContent: 'center',
            }}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        )}
      </SafeAreaView>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity>
            <Icon
              name="close"
              size={17}
              color={'#9098B1'}
              style={styles.Close}
              onPress={() => {
                setState('Requests');
              }}></Icon>
          </TouchableOpacity>
          <Text style={styles.FilterSearch}>Filter Search</Text>
        </View>
        <TouchableOpacity
          style={state == 'Feed' ? styles.SubMenuHover : styles.SubMenuText}
          onPress={() => {
            setState('Feed');
          }}></TouchableOpacity>
        <View>
          <View>
            <Text style={styles.FilterContainer}></Text>
            <Text style={styles.PriceRange}>Price Range</Text>
          </View>
          <View style={styles.TextInput}>
            <TextInput value={low ? '$' + low.toString() : ''}></TextInput>
            <View style={styles.TextInput1}>
              <TextInput value={high ? '$' + high.toString() : ''}></TextInput>
            </View>
          </View>
          <View>
            <Slider
              style={styles.slider}
              min={min}
              max={max}
              step={1}
              // disableRange={rangeDisabled}
              floatingLabel={floatingLabel}
              renderThumb={renderThumb}
              renderRail={renderRail}
              renderRailSelected={renderRailSelected}
              renderLabel={renderLabel}
              renderNotch={renderNotch}
              onValueChanged={handleClick}
            />
            <Text style={styles.Min}>MIN</Text>
            <Text style={styles.Max}>MAX</Text>
          </View>
          <View>
            <Text style={styles.Condition}>Condition</Text>
            <View style={styles.ConditionCon}>
              <TouchableOpacity
                style={
                  isSelected?.includes('New')
                    ? styles.Button1
                    : styles.SelectedBtn
                }
                onPress={New => setActive('New')}>
                <Text
                  style={
                    isSelected?.includes('New')
                      ? styles.BtnTxt
                      : styles.SelectedBtnTxt
                  }>
                  New
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  isSelected?.includes('Used')
                    ? styles.Button2
                    : styles.SelectedBtn
                }
                onPress={() => setActive('Used')}>
                <Text
                  style={
                    isSelected?.includes('Used')
                      ? styles.Btn1Txt
                      : styles.SelectedBtnTxt
                  }>
                  Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  isSelected?.includes('Not Specified')
                    ? styles.SelectedBtn
                    : styles.Btn2Txt
                }
                onPress={Button3 => setActive('Not Specified')}>
                <Text
                  style={
                    isSelected?.includes('Not Specified')
                      ? styles.SelectedBtnTxt
                      : styles.Btn2Txt
                  }>
                  Not Specified
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.Condition}>Buying Format</Text>
              <View style={styles.ConditionCon}>
                <TouchableOpacity
                  style={
                    isSelected?.includes('All Listings')
                      ? styles.SelectedBtn
                      : styles.BtnByFt1
                  }
                  onPress={Button3 => setActive('All Listings')}>
                  <Text style={styles.BtnTxTByF1}>All Listings</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Accepts Offers')
                      ? styles.SelectedBtn
                      : styles.BtnByFt2
                  }
                  onPress={Button3 => setActive('Accepts Offers')}>
                  <Text style={styles.BtnTxTByF2}>Accepts Offers</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Auction')
                      ? styles.SelectedBtn
                      : styles.BtnByFt3
                  }
                  onPress={Button3 => setActive('Auction')}>
                  <Text style={styles.BtnTxTByF3}>Auction</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Buy It Now')
                      ? styles.SelectedBtn
                      : styles.BtnByFt4
                  }
                  onPress={Button3 => setActive('Buy It Now')}>
                  <Text style={styles.BtnTxTByF4}>Buy It Now</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    isSelected?.includes('Classified Ads')
                      ? styles.SelectedBtn
                      : styles.BtnByFt5
                  }
                  onPress={Button3 => setActive('Classified Ads')}>
                  <Text style={styles.BtnTxTByF5}>Classified Ads</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.Condition}>Item Location</Text>
            <View style={styles.ConditionCon}>
              <TouchableOpacity
                style={
                  isSelected?.includes('Us Only')
                    ? styles.SelectedBtn
                    : styles.BtnByFt6
                }
                onPress={Button3 => setActive('Us Only')}>
                <Text style={styles.BtnTxTByF6}>Us Only</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  isSelected?.includes('Us Only')
                    ? styles.SelectedBtn
                    : styles.BtnByFt7
                }
                onPress={Button3 => setActive('Not Specified')}>
                <Text style={styles.BtnTxTByF7}>North America</Text>
              </TouchableOpacity>
              <Pressable
                style={
                  isSelected?.includes('Europe')
                    ? styles.SelectedBtn
                    : styles.BtnByFt8
                }
                onPress={Button3 => setActive('Europe')}>
                <Text style={styles.BtnTxTByF8}>Europe</Text>
              </Pressable>
              <TouchableOpacity
                sstyle={
                  isSelected?.includes('Asia')
                    ? styles.SelectedBtn
                    : styles.BtnByFt9
                }
                onPress={Button3 => setActive('Asia')}>
                <Text style={styles.BtnTxTByF9}>Asia</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.Apply}>
                <Text style={styles.ApplyTxt}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home1;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90,
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  safearea: {
    backgroundColor: '#fff',
    flex: 2,
  },
  Role: {
    width: 126,
    height: 22,
    marginTop: 3,
    marginLeft: 125,
    opacity: 87,
    fontSize: 16,
    lineHeight: 22,
    color: '#454545',
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
    backgroundColor: '#white',
  },
  PriceRange: {
    width: '100%',
    height: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#000',
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
  SysName: {
    width: 90,
    height: 22,
    marginTop: 10,
    marginLeft: 125,
    opacity: 87,
    fontSize: 16,
    lineHeight: 22,
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
  title: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000000',
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
    width: 60,
    height: 18,
    marginLeft: 30,
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
  userName: {
    width: 150,
    height: 24,
    marginTop: 30,
    marginLeft: 125,
    opacity: 87,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
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
    marginLeft: 16,
    color: '#9098B1',
  },
  Max: {
    width: 35,
    height: 18,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#9098B1',
    marginTop: -20,
    marginLeft: 345,
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
    marginTop: 27,
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.5,
    color: '#000',
  },
  FilterContainer: {
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
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    borderColor: 'black',
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
    width: 120,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
    backgroundColor: '#40BFFF1A',
  },
  SelectedBtnTxt: {
    marginLeft: 45,
    marginTop: 15,
    color: '#40BFFF',
  },
  Close: {
    marginTop: 4,
    marginLeft: 10,
    letterSpacing: 1,
  },
});
