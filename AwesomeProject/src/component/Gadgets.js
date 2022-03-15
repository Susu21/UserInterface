import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/Feather';
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => (width / guidelineBaseWidth) * size;
const verticalScale = size => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const Gadgets = props => {
  const [dimensions, setDimensions] = useState({window, screen});

  const Items = ({item, index}) => {
    // console.log('index % 2 == 1', index);
    return (
      <View style={styles.ImageFrame4}>
        {/* {Object.entries(dimensions.window).map(([key, value]) => (
          <Text>
            {key} - {value}
          </Text>
        ))} */}
        <Image
          resizeMode="contain"
          style={styles.imageTomato}
          source={{uri: item.imageTomato}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.RetailPrice}>{item.RetailPrice}</Text>
        <View
          style={{
            width: scale(130),
            height: verticalScale(25),
            marginTop: '5%',
            flexDirection: 'row',
            backgroundColor: 'white',
            marginLeft: '5%',
          }}>
          <Icon name="star" size={moderateScale(14)} color="#ffe234" />

          <Text
            style={{
              color: 'black',
              width: '15%',
              fontSize: moderateScale(12),
              marginLeft: '5%',
            }}>
            {item.Ratings}
          </Text>
          <Text
            style={{
              width: '55%',
              fontSize: moderateScale(12),
              color: 'black',
              marginLeft: '10%',
            }}>
            {item.Reviews + ' Reviews'}
          </Text>
          <Icons name="more-vertical" size={18} color="black" />
        </View>
      </View>
    );
  };
  const renderItem = ({item, index}) => <Items item={item} index={index} />;
  const data = [
    {
      id: 1,
      title: 'TMA-2HD Wireless',
      RetailPrice: 'USD 350',
      Ratings: '4.6',
      Reviews: '86',
      imageTomato:
        'https://www.mytrendyphone.eu/images/Forever-Music-Soul-BHS-300-Bluetooth-Headphones-with-Microphone-Black-5900495738110-17072019-01-p.jpg',
    },
    {
      id: 2,
      title: 'TMA-2HD Wireless',
      RetailPrice: 'USD 350',
      Ratings: '4.6',
      Reviews: '86',
      imageTomato:
        'https://www.mytrendyphone.eu/images/Forever-Music-Soul-BHS-300-Bluetooth-Headphones-with-Microphone-Black-5900495738110-17072019-01-p.jpg',
    },
    {
      id: 3,
      title: 'TMA-2HD Wireless',
      RetailPrice: 'USD 350',
      Ratings: '4.6',
      Reviews: '86',
      imageTomato:
        'https://www.mytrendyphone.eu/images/Forever-Music-Soul-BHS-300-Bluetooth-Headphones-with-Microphone-Black-5900495738110-17072019-01-p.jpg',
    },
    {
      id: 4,
      title: 'TMA-2HD Wireless',
      RetailPrice: 'USD 350',
      Ratings: '4.6',
      Reviews: '86',
      imageTomato:
        'https://www.mytrendyphone.eu/images/Forever-Music-Soul-BHS-300-Bluetooth-Headphones-with-Microphone-Black-5900495738110-17072019-01-p.jpg',
    },
  ];

  return (
    <View style={{flex: 1}}>
      <View style={styles.HeaderText}>
        <Text style={styles.HeaderTextTxt}>Headphone</Text>
        <Text style={styles.HeaderTextTxt1}>TMA Wireless</Text>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <View>
          <FlatList
            contentContainerStyle={{
              // height: Platform.OS === 'android' ? '100%' : '10%',
              // width: Platform.OS === 'android' ? '100%' : '10%',
              width: scale(350),
              height: verticalScale(350),
              paddingBottom: 40,
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: '#FAFAFA',
              borderRadius: 20,
            }}
            numColumns={2}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default Gadgets;

const styles = StyleSheet.create({
  HeaderText: {
    paddingVertical: 20,
    marginLeft: 40,
  },
  HeaderTextTxt: {
    justifyContent: 'flex-start',
    marginTop: 10,
    color: 'black',
  },
  HeaderTextTxt1: {
    alignContent: 'flex-start',
    marginTop: 10,
    color: 'black',
    fontWeight: 'bold',
    fontSize: moderateScale(22, 0.9),
  },
  imageTomato: {
    width: '40%',
    height: '35%',
    alignSelf: 'center',
  },
  ImageFrame4: {
    // width: moderateScale(150),
    // height: verticalScale(260),
    width: scale(150),
    height: verticalScale(150),
    justifyContent: 'center',
    // height: Platform.OS === 'android' ? '95%' : '10%',
    // width: Platform.OS === 'android' ? '45%' : '10%',
    marginLeft: '2%',
    marginTop: '5%',
    borderRadius: 15,
    backgroundColor: 'white',
  },
  title: {
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginTop: '5%',

    fontSize: moderateScale(14, 0.9),

    letterSpacing: 0.2,
    color: 'black',
    backgroundColor: 'white',
  },
  RetailPrice: {
    width: '35%',
    fontSize: moderateScale(12),
    marginLeft: 12,
    color: 'black',
    fontWeight: 'bold',
  },
});
// import React, {useState, useEffect} from 'react';
// import {View, StyleSheet, Text, Dimensions} from 'react-native';

// const window = Dimensions.get('window');
// const screen = Dimensions.get('screen');

// const Gadgets = () => {
//   const [dimensions, setDimensions] = useState({window, screen});

//   useEffect(() => {
//     const subscription = Dimensions.addEventListener(
//       'change',
//       ({window, screen}) => {
//         setDimensions({window, screen});
//       },
//     );
//     return () => subscription?.remove();
//   });

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Window Dimensions</Text>
//       {Object.entries(dimensions.window).map(([key, value]) => (
//         <Text>
//           {key} - {value}
//         </Text>
//       ))}
//       <Text style={styles.header}>Screen Dimensions</Text>
//       {Object.entries(dimensions.screen).map(([key, value]) => (
//         <Text>
//           {key} - {value}
//         </Text>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 16,
//     marginVertical: 10,
//   },
// });

// export default Gadgets;
