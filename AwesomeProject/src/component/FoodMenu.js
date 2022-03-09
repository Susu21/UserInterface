import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const FoodMenu = props => {
  const Items = ({item, index}) => {
    console.log('index % 2 == 1', index);
    return (
      <View
        style={
          index == 1
            ? styles.ImageFrame4
            : index == 0
            ? styles.ImageFrame3
            : index % 3 == 0
            ? styles.ImageFrame2
            : styles.ImageFrame
        }>
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
    <View>
      <View>
        <Text style={styles.Headertext}>Found 6 results</Text>
        <View>
          <FlatList
            contentContainerStyle={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '95%',
              paddingBottom: 50,
              marginLeft: '2.5%',
              justifyContent: 'center',
            }}
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default FoodMenu;

const styles = StyleSheet.create({
  ImageFrame: {
    width: 150,
    height: 212.41,
    marginTop: 15,
    marginHorizontal: 15,
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
  ImageFrame2: {
    width: 150,
    height: 212.41,
    marginTop: 50,
    marginHorizontal: 15,
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
  ImageFrame3: {
    width: 150,
    height: 212.41,
    marginTop: 60,
    marginHorizontal: 15,
    marginBottom: 10,
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
  ImageFrame4: {
    width: 150,
    height: 212.41,
    marginTop: 100,
    marginHorizontal: 15,
    marginBottom: 10,
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
  imageSneacker1: {
    height: 128,
    width: 128,

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
    marginTop: 70,
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
