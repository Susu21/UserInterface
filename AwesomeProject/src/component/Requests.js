import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
const Requests = props => {
  const Item = ({item}) => {
    return (
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: item.image}} />
        <View
          style={{
            width: 230,
          }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.SubText}>{item.subtitle}</Text>
        </View>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    );
  };
  const renderItem = ({item, index}) => <Item item={item} />;
  const DATA = [
    {
      id: 1,
      title: 'Mohan sent you a request',
      date: '2h',
      subtitle: '24 Mutual connections',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ikNsqr2afmXK__jOj5KWrk_GRvqQfA8E3cs9hTuATegoL9KBpDA8edTNXxNDgjv6Wd4&usqp=CAU',
    },
    {
      id: 2,
      title: 'Joshuah sent you a request',
      date: '4h',
      subtitle: '24 Mutual connections',
      image:
        'https://www.aayag.com/wp-content/uploads/2021/08/free-profile-photo-whatsapp-3.png',
    },
    {
      id: 3,
      title: 'Margarita sent you a request',
      date: '6h',
      subtitle: '24 Mutual connections',
      image:
        'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      id: 4,
      title: 'Timmy sent you a request',
      date: '7h',
      subtitle: '24 Mutual connections',
      image:
        'https://media.istockphoto.com/photos/man-looking-picture-id1168966537?b=1&k=20&m=1168966537&s=170667a&w=0&h=11_v7GkTBvrMpto6iVO5oSI8VjxL5GdlraTLK_LizwM=',
    },
    {
      id: 5,
      title: 'Jaguar sent you a request',
      date: '2h',
      subtitle: '24 Mutual connections',
      image:
        'https://image.shutterstock.com/image-photo/young-adult-profile-picture-red-260nw-1655747050.jpg',
    },
  ];
  return (
    <FlatList
      contentContainerStyle={{
        flexDirection: 'column',
      }}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
export default Requests;

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'white',
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 51.72,
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  SubText: {
    fontSize: 13,
    lineHeight: 18,
    marginLeft: 10,
    marginTop: 5,

    backgroundColor: 'white',
  },
  item: {
    width: 400,
    height: 80,
    backgroundColor: '#ffffff',
    padding: 20,
    borderWidth: 1,
    borderTopColor: '#ECEEF1',

    borderBottomColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    marginTop: 16,
    flexDirection: 'row',
  },
  date: {
    marginLeft: 50,
  },
});
