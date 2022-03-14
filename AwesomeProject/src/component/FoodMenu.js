import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  LogBox,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const FoodMenu = props => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);
  const Items = ({item, index}) => {
    // console.log('index % 2 == 1', index);
    return (
      <View style={index % 2 == 1 ? styles.ImageFrame3 : styles.ImageFrame4}>
        <Image style={styles.imageSneacker} source={{uri: item.imageTomato}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 20,
            fontSize: 17,
            lineHeight: 20.29,
            color: '#FA4A0C',
            fontWeight: 'bold',
          }}>
          {item.RetailPrice}
        </Text>
      </View>
    );
  };

  const renderItem = ({item, index}) => <Items item={item} index={index} />;
  const data = [
    {
      id: 1,
      title: 'Veggie tomato mix',
      RetailPrice: 'N1,900',
      imageTomato:
        'https://www.pikpng.com/pngl/b/148-1486968_inspired-cuisine-food-plate-png-top-view-clipart.png',
    },
    {
      id: 2,
      title: 'Egg and cucumber...',
      RetailPrice: 'N1,900',
      imageTomato: 'https://img-9gag-fun.9cache.com/photo/a07MN9z_460s.jpg',
    },
    {
      id: 3,
      title: 'Fried chicken m...',
      RetailPrice: 'N1,900',
      imageTomato:
        'https://v6n8b9n6.stackpathcdn.com/wp-content/uploads/2021/08/vegan-fried-chicken-oyster-mushroom-recipe-497x600.jpg',
    },
    {
      id: 4,
      title: 'Moi-moi and ekpa.',
      RetailPrice: 'N1,900',
      imageTomato:
        'https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/v1621044973/Southeast-Asian-Food-Pad-Thai/Southeast-Asian-Food-Pad-Thai.jpg',
    },
  ];

  return (
    <View style={{flex: 1, paddingBottom: '15%'}}>
      <Text style={styles.Headertext}>Found 6 results</Text>
      <ScrollView>
        <FlatList
          contentContainerStyle={{
            width: '100%',
            height: '100%',
            paddingHorizontal: '5%',

            paddingBottom: '20%',
            backgroundColor: 'white',
            alignSelf: 'center',
            // height: hp('80%'),
            // padding: '30%',
            // marginLeft: '5%',
          }}
          numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  // ImageFrame: {
  //   width: '45%',
  //   height: '80%',
  //   marginTop: '20%',

  //   borderRadius: 30,
  //   backgroundColor: 'white',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 6,
  //   },
  //   shadowOpacity: 0.37,
  //   shadowRadius: 7.49,

  //   elevation: 12,
  // },
  // ImageFrame2: {
  //   width: '45%',
  //   height: '68%',
  //   marginTop: '23%',

  //   borderRadius: 30,
  //   backgroundColor: 'white',
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 6,
  //   },
  //   shadowOpacity: 0.37,
  //   shadowRadius: 7.49,

  //   elevation: 12,
  // },
  ImageFrame3: {
    width: '45%',
    height: '100%',
    marginTop: '25%',
    marginLeft: '4%',
    height: Platform.OS === 'android' ? '75%' : '10%',
    width: Platform.OS === 'android' ? '45%' : '10%',
    borderRadius: 30,
    backgroundColor: 'white',
    borderColor: 'black',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  ImageFrame4: {
    width: '45%',
    height: '75%',
    marginTop: '15%',
    marginLeft: '4%',
    height: Platform.OS === 'android' ? '75%' : '10%',
    width: Platform.OS === 'android' ? '45%' : '10%',
    borderRadius: 30,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  imageSneacker: {
    height: 124.98,
    width: 124.98,
    marginTop: -40,
    borderRadius: 70,
    alignSelf: 'center',
  },

  title: {
    fontSize: 20,
    fontFamily: 'LeagueGothic-Regular-VariableFont_wdth',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    color: 'black',
  },
  Headertext: {
    fontFamily: '',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  MultipleBtn: {
    width: 100,
    height: 30,
    borderRadius: 29,

    backgroundColor: 'black',
  },
  MultipleBtnTxt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});
