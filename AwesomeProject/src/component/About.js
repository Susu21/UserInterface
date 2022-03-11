import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  LogBox,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const About = props => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
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
    // console.log('defaultRating', d÷ßefaultRating);
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
    <ScrollView>
      <ImageBackground
        style={styles.Header}
        source={{
          uri: 'https://c0.wallpaperflare.com/preview/28/600/957/pair-of-black-white-and-red-air-jordan-1-shoes.jpg',
        }}>
        <Text style={styles.HeaderText}>Super Flash Sale 50% Off</Text>
      </ImageBackground>
      <FlatList
        contentContainerStyle={{
          width: '95%',
          marginLeft: '2.5%',

          justifyContent: 'center',
        }}
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({
  Header: {
    width: wp('92%'),
    height: hp('30%'),
    marginLeft: '3.9%',

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

  imageSneacker: {
    height: 250,
    width: 133,
    alignSelf: 'center',
    marginTop: 16,
    justifyContent: 'center',
    flex: 1,
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

  BotContainer: {
    width: 165,
    height: 282,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    margin: 5,
    flex: 1,
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
    fontWeight: 'bold',
  },
});
