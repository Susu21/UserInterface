import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
const Requests = props => {
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
  return (
    <View>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Requests;

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000000',
  },
});
