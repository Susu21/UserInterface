import {View, Text, LogBox, Alert} from 'react-native';
import React, {useState, createRef, useCallback} from 'react';
import {
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import 'react-native-gesture-handler';
import Slider from 'rn-range-slider';
import 'react-native-gesture-handler';
import Label from './src/component/Label';
import Notch from './src/component/Notch';
import Rail from './src/component/Rail';
import RailSelected from './src/component/RailSelected';
import Thumb from './src/component/Thumbs';
import TextButton from './src/component/TextButton';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
import Header from './src/component/Header';
import {TextInput} from 'react-native-gesture-handler';

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
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
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
  const [value, setValue] = useState();
  const [state, setState] = useState(1);
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
              setState('Feed');
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
      <View>
        <TextInput style={styles.PriceRange}>Price Range</TextInput>
      </View>
      <View style={styles.TextInput}>
        <TextInput value={low ? low.toString() : ''}></TextInput>
        <View style={styles.TextInput1}>
          <TextInput value={high ? high.toString() : ''}></TextInput>
        </View>
      </View>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.text}>Range slider demo</Text>
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
        <View style={styles.horizontalContainer}>
          <TextButton
            text="Toggle floating"
            containerStyle={styles.button}
            onPress={toggleFloatingLabel}
          />
          <TextButton
            text={rangeDisabled ? 'Enable range' : 'Disable range'}
            containerStyle={styles.button}
            onPress={toggleRangeEnabled}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <TextButton
            text="Set min to 0"
            containerStyle={styles.button}
            onPress={setMinTo0}
          />
          <TextButton
            text="Set min to 50"
            containerStyle={styles.button}
            onPress={setMinTo50}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <TextButton
            text="Set max to 100"
            containerStyle={styles.button}
            onPress={setMaxTo100}
          />
          <TextButton
            text="Set max to 500"
            containerStyle={styles.button}
            onPress={setMaxTo500}
          />
        </View>
      </View>

      {/* <View>
        <Slider
          style={styles.slider}
          value={setValue}
          min={min}
          max={max}
          step={1}
          floatingLabel
          disableRange={rangeDisabled}
          floatingLabel={floatingLabel}
          renderThumb={renderThumb}
          renderRail={renderRail}
          renderRailSelected={renderRailSelected}
          renderLabel={renderLabel}
          renderNotch={renderNotch}
          onValueChanged={handleClick}
        />
      </View> */}
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
    flex: 1,
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
    height: 48,
    marginLeft: 16,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: 'black',
    flexDirection: 'row',
    color: '#fff',
    backgroundColor: '#white',
  },
  PriceRange: {
    marginLeft: 15,
    fontWeight: 'bold',
    borderTopWidth: 1,
    borderColor: 'black',
  },
  TextInput1: {
    width: 165,
    height: 48,
    marginLeft: 160,
    borderRadius: 5,
    borderWidth: 0.4,
    borderColor: 'black',
    flexDirection: 'row',
    color: '#fff',
    backgroundColor: '#white',
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
  slider: {},
  button: {},
});
