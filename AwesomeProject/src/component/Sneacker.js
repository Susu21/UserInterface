// import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React from 'react';

// const Sneacker = props => {
//   const Item = ({item}) => {
//     return (
//       <View style={styles.item}>
//         <Image style={styles.image} source={{uri: item.image}} />
//         <View
//           style={{
//             width: 230,
//           }}>
//           <Text style={styles.title}>{item.title}</Text>
//           <Text style={styles.SubText}>{item.subtitle}</Text>
//         </View>
//         <Text style={styles.date}>{item.date}</Text>
//       </View>
//     );
//   };
//   const renderItem = ({item, index}) => <Item item={item} />;

//
//   return (
//     <FlatList
//       contentContainerStyle={{
//         flexDirection: 'column',
//       }}
//       data={data}
//       renderItem={renderItem}
//       keyExtractor={item => item.id}
//     />
//   );
// };

// export default Sneacker;

// const styles = StyleSheet.create({
//   imageSneacker: {
//     height: 133,
//     width: 133,
//     marginLeft: 16,
//     marginTop: 16,
//     justifyContent: 'center',
//   },
// });
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const About = () => {
  const image = {
    uri: 'https://c0.wallpaperflare.com/preview/28/600/957/pair-of-black-white-and-red-air-jordan-1-shoes.jpg',
  };
  const imageSneacker = {
    uri: 'https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/44913ad2-505b-46f9-b0f8-436e0a8cfb1b/air-max-270-react-eng-laser-bluewhite-release-date.jpg',
  };
  const [defaultRating, setDefaultRating] = useState(3);
  const [defRating, setDefRating] = useState(2);
  // To set the max number of Stars
  const maxRating = [1, 2, 3, 4, 5];
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
  const CustomRatingBar = props => {
    console.log('defaultRating', defaultRating);
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map(item => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
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
  return (
    <ScrollView>
      <View style={styles.Header}>
        <ImageBackground
          source={image}
          resizeMode="cover"
          borderRadius={5}
          style={styles.image}>
          <Text style={styles.HeaderText}>Super Flash Sale 50% Off</Text>
        </ImageBackground>
        <View>
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
        </View>
      </View>
      <View
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
                setDefRating={setDefRating}
                defRating={defRating}
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
            <Text style={{color: '#223263', fontSize: 14, fontWeight: 'bold'}}>
              Nike Air Max 270 React ENG
            </Text>
            <CustomRatingBar
              setDefaultRating={setDefaultRating}
              defaultRating={defaultRating}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  Header: {
    width: 343,
    height: 207,
    marginTop: 15,
    marginLeft: 25,
    backgroundColor: 'black',
    borderRadius: 5,
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
    marginLeft: 16,
    marginTop: 16,
    justifyContent: 'center',
  },
  HeaderText: {
    width: 209,
    height: 70,
    marginBottom: 30,
    marginLeft: 20,
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
    marginTop: 5,
  },
  starImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
  },
});
