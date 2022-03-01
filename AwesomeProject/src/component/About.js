import React, {useEffect, useState} from 'react';

import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Timer from './Timer';

const About = props => {
  const [defaultRating, setDefaultRating] = useState(4);
  // To set the max number of Stars
  const maxRating = [1, 2, 3, 4, 5];
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  const CustomRatingBar = props => {
    const [selectedRate, setSelectedRate] = useState(1);
    console.log('defaultRating', defaultRating);
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setSelectedRate(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= selectedRate
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const Items = ({item}) => {
    return (
      <View style={styles.BotContainer}>
        <Image
          style={styles.imageSneacker}
          source={{uri: item.imageSneacker}}
        />
        <Text style={styles.title}>{item.title}</Text>
        <CustomRatingBar
          id={item.id}
          defaultRating={defaultRating}
          setDefaultRating={setDefaultRating}
        />
        <Text style={styles.Saledprice}>{item.Saledprice}</Text>
        <Text
          style={{
            color: '#9098B1',
            marginTop: 8,
            marginBottom: 26,
            marginLeft: 15,
            textDecorationLine: 'line-through',
            textDecorationStyle: 'solid',
          }}>
          {item.RetailPrice}
        </Text>
        <Text style={styles.Discount}>{item.Discount}</Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => <Items item={item} />;
  const data = [
    {
      id: 1,
      title: 'Nike Air Max 270 React ENG',
      Saledprice: '299.43$',
      RetailPrice: '534.33$',
      Discount: '24% Off',
      imageSneacker:
        'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/44913ad2-505b-46f9-b0f8-436e0a8cfb1b/air-max-270-react-eng-laser-bluewhite-release-date.jpg',
    },
    {
      id: 2,
      title: 'Nike Air Max 270 React ENG',
      Saledprice: '299.43$',
      RetailPrice: '534.33$',
      Discount: '24% Off',
      imageSneacker:
        'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/44913ad2-505b-46f9-b0f8-436e0a8cfb1b/air-max-270-react-eng-laser-bluewhite-release-date.jpg',
    },
    {
      id: 3,
      title: 'Nike Air Max 270 React ENG',
      Saledprice: '299.43$',
      RetailPrice: '534.33$',
      Discount: '24% Off',
      imageSneacker:
        'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/44913ad2-505b-46f9-b0f8-436e0a8cfb1b/air-max-270-react-eng-laser-bluewhite-release-date.jpg',
    },
    {
      id: 4,
      title: 'Nike Air Max 270 React ENG',
      Saledprice: '299.43$',
      RetailPrice: '534.33$',
      Discount: '24% Off',
      imageSneacker:
        'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/44913ad2-505b-46f9-b0f8-436e0a8cfb1b/air-max-270-react-eng-laser-bluewhite-release-date.jpg',
    },
  ];

  return (
    <View>
      <ImageBackground
        style={styles.Header}
        source={{
          uri: 'https://c0.wallpaperflare.com/preview/28/600/957/pair-of-black-white-and-red-air-jordan-1-shoes.jpg',
        }}>
        <Text style={styles.HeaderText}>Super Flash Sale 50% Off</Text>
        <Timer until={props.timer} setTimer={props.setTimer} />
      </ImageBackground>
      <FlatList
        style={{}}
        contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          width: '90%',
          marginLeft: '5%',
          justifyContent: 'center',
        }}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  Header: {
    width: 343,
    height: 206,
    marginTop: 15,
    marginLeft: 25,
    borderRadius: 5,
  },
  title: {
    marginLeft: 15,
    fontWeight: 'bold',
    color: '#223263',
  },
  Saledprice: {
    marginLeft: 15,
    color: '#40BFFF',
    fontWeight: 'bold',
  },
  image: {
    flex: 1,
    height: 207,
    width: 343,

    justifyContent: 'center',
  },
  imageSneacker: {
    height: 133,
    width: 133,
    alignSelf: 'center',
    marginTop: 16,
    justifyContent: 'center',
  },
  HeaderText: {
    width: 209,
    height: 70,
    marginTop: 32,
    marginLeft: 24,
    fontSize: 25,
    lineHeight: 36,
    letterSpacing: 0.5,
    fontWeight: 'bold',
    color: 'white',
  },
  HeaderClockHour: {
    height: 41,
    marginLeft: 15,
    marginBottom: 35,
    borderRadius: 5,

    flexDirection: 'row',
  },
  HeaderClockMin: {
    width: 42,
    height: 41,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },

  HeaderClockHourTxt: {
    fontWeight: 'bold',
    color: '#223263',
  },

  HeaderClockMinTxt: {
    height: 42,
    width: 40,
    marginTop: 10,
    marginLeft: 13,
    borderRadius: 5,
    fontWeight: 'bold',
    color: '#223263',
    backgroundColor: '',
  },
  HourMinBetween: {
    height: 40,
    marginTop: 10,
    marginHorizontal: 3,
    fontSize: 14,
    color: 'white',
  },
  BotContainer: {
    width: 165,
    height: 282,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    margin: 5,
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 23,
    color: '#000',
    marginTop: 15,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: 15,
  },
  starImageStyle: {
    width: 15,
    height: 15,
    resizeMode: 'cover',
  },
  Discount: {
    marginLeft: 75,
    marginTop: -45,
    color: '#FB7181',
  },
});
{
  /* <View style={styles.Header}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            borderRadius={5}
            style={styles.image}>
            <Text style={styles.HeaderText}>Super Flash Sale 50% Off</Text>
          </ImageBackground> */
}
{
  /* <View>
            <View style={styles.HeaderClockHour}>
              <View style={styles.HeaderClockMin}>
                <Text style={styles.HeaderClockHourTxt}>08</Text>
              </View>
              <View>
                <Text style={styles.HourMinBetween}>:</Text>
              </View>
              <View style={styles.HeaderClockMin}>
                <Text style={styles.HeaderClockHourTxt}>34</Text>
              </View>
              <View>
                <Text style={styles.HourMinBetween}>:</Text>
              </View>
              <View style={styles.HeaderClockMin}>
                <Text style={styles.HeaderClockHourTxt}>15</Text>
              </View>
            </View>
          </View> */
}
{
  /* </View> */
}
{
  /* <View
          style={{
            flexDirection: 'row',
            marginTop: 10,

            paddingHorizontal: 25,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity>
            <View style={styles.BotContainer}>
              <ImageBackground
                source={imageSneacker}
                style={styles.imageSneacker}
                resizeMode={'cover'}></ImageBackground>
              <View
                style={{
                  width: 133,
                  height: 36,
                  marginTop: 6,
                  marginLeft: 16,
                }}>
                <Text
                  style={{color: '#223263', fontSize: 14, fontWeight: 'bold'}}>
                  Nike Air Max 270 React ENG
                </Text>
                <CustomRatingBar
                  defaultRating={defaultRating}
                  setDefaultRating={setDefaultRating}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.BotContainer}>
            <ImageBackground
              source={imageSneacker}
              style={styles.imageSneacker}
              resizeMode={'cover'}></ImageBackground>
            <View
              style={{
                width: 133,
                height: 36,
                marginTop: 6,
                marginLeft: 16,
              }}>
              <Text
                style={{color: '#223263', fontSize: 14, fontWeight: 'bold'}}>
                Nike Air Max 270 React ENG
              </Text>
              <CustomRatingBar
                defaultRating={defaultRating1}
                setDefaultRating={setDefaultRating1}
              />
            </View>
          </View>
        </View> */
}
// return (
//   <ScrollView>
//     <View style={styles.Header}>
//       <ImageBackground
//         source={image}
//         resizeMode="cover"
//         borderRadius={5}
//         style={styles.image}>
//         <Text style={styles.HeaderText}>Super Flash Sale 50% Off</Text>
//       </ImageBackground>
//       <View>
//         <View style={styles.HeaderClockHour}>
//           <View style={styles.HeaderClockMin}>
//             <Text style={styles.HeaderClockHourTxt}>08</Text>
//           </View>
//           <View>
//             <Text style={styles.HourMinBetween}>:</Text>
//           </View>
//           <View style={styles.HeaderClockMin}>
//             <Text style={styles.HeaderClockHourTxt}>34</Text>
//           </View>
//           <View>
//             <Text style={styles.HourMinBetween}>:</Text>
//           </View>
//           <View style={styles.HeaderClockMin}>
//             <Text style={styles.HeaderClockHourTxt}>15</Text>
//           </View>
//         </View>
//       </View>
//     </View>
//     <View
//       style={{
//         flexDirection: 'row',
//         marginTop: 10,

//         paddingHorizontal: 25,
//         justifyContent: 'space-around',
//       }}>
//       <TouchableOpacity>
//         <View style={styles.BotContainer}>
//           <ImageBackground
//             source={imageSneacker}
//             style={styles.imageSneacker}
//             resizeMode={'cover'}></ImageBackground>
//           <View
//             style={{
//               width: 133,
//               height: 36,
//               marginTop: 6,
//               marginLeft: 16,
//             }}>
//             <Text
//               style={{color: '#223263', fontSize: 14, fontWeight: 'bold'}}>
//               Nike Air Max 270 React ENG
//             </Text>
//             <CustomRatingBar
//               defaultRating={defaultRating}
//               setDefaultRating={setDefaultRating}
//             />
//           </View>
//         </View>
//       </TouchableOpacity>
//       <View style={styles.BotContainer}>
//         <ImageBackground
//           source={imageSneacker}
//           style={styles.imageSneacker}
//           resizeMode={'cover'}></ImageBackground>
//         <View
//           style={{
//             width: 133,
//             height: 36,
//             marginTop: 6,
//             marginLeft: 16,
//           }}>
//           <Text style={{color: '#223263', fontSize: 14, fontWeight: 'bold'}}>
//             Nike Air Max 270 React ENG
//           </Text>
//           <CustomRatingBar
//             defaultRating={defaultRating1}
//             setDefaultRating={setDefaultRating1}
//           />
//         </View>
//       </View>
//     </View>
//   </ScrollView>
// );
