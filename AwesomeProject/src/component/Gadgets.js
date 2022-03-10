import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const Gadgets = props => {
  const [conditionSel, setConditionSel] = useState();
  const [state, setState] = useState();
  const Items = ({item, index}) => {
    console.log('index % 2 == 1', index);
    return (
      <View style={styles.ImageFrame4}>
        <Image style={styles.imageTomato} source={{uri: item.imageTomato}} />
        <Text style={styles.title}>{item.title}</Text>
        <Text
          style={{
            marginHorizontal: 10,
            alignItems: 'flex-start',
            color: 'black',
            fontWeight: 'bold',
          }}>
          {item.RetailPrice}
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              width: 15,
              height: 15,
              marginTop: 12,
              marginLeft: 5,
              marginHorizontal: 5,
            }}
            source={{
              uri: 'https://tevispropane.com/wp-content/uploads/2016/11/Review-star.png',
            }}
          />
          <Text style={{color: 'black', marginTop: 10}}>{item.Ratings}</Text>
          <Text style={{marginLeft: 9, marginTop: 10, color: 'black'}}>
            {item.Reviews + ' Reviews'}
          </Text>
          <Image
            style={{width: 22, height: 22, marginLeft: 15, marginTop: 10}}
            source={{
              uri: 'https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/dots_dot_dot-menu_option_nav_navigation_main-512.png',
            }}
          />
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
    <View>
      <View style={styles.HeaderText}>
        <Text style={styles.HeaderTextTxt}>Headphone</Text>
        <Text style={styles.HeaderTextTxt1}>TMA Wireless</Text>
      </View>
      <View>
        <View>
          <FlatList
            contentContainerStyle={{
              width: '90%',

              paddingBottom: 50,
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: '#F3F3F3',
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
    fontSize: 24,
  },
  Menu: {
    flexDirection: 'row',
    marginLeft: 40,
  },
  MenuText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'black',
  },
  SelectedBtn: {
    width: 92,
    height: 41,
    borderRadius: 10,
    marginLeft: 13,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#BABABA',
  },
  Button1: {
    width: 92,
    height: 41,
    marginTop: 10,
    marginLeft: 15,
  },
  imageTomato: {
    width: 100,
    height: 100,
    marginTop: 25,
    alignSelf: 'center',
  },
  ImageFrame4: {
    width: 165,
    height: 250,
    marginLeft: 21,
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  title: {
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginTop: 35,
    letterSpacing: 0.2,
    color: 'black',
  },
});
