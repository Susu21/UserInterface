// import {View, Text, LogBox} from 'react-native';
// import React, {useState} from 'react';
// import {
//   Image,
//   StyleSheet,
//   FlatList,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);
// import Header from '../component/Header';
// const Item = ({item}) => {
//   return (
//     <View style={styles.item}>
//       <Image style={styles.image} source={{uri: item.image}} />
//       <Text style={styles.title}>{item.title}</Text>
//       <Text style={styles.SubText}>{item.subtitle}</Text>
//     </View>
//   );
// };
// const renderItem = ({item, index}) => <Item item={item} />;
// const DATA = [
//   {
//     id: 1,
//     title: 'Mohan sent you a request               2h',
//     subtitle: '24 Mutual connection',
//     image:
//       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ikNsqr2afmXK__jOj5KWrk_GRvqQfA8E3cs9hTuATegoL9KBpDA8edTNXxNDgjv6Wd4&usqp=CAU',
//   },
//   {
//     id: 2,
//     title: 'Joshuah sent you a request             7d',
//     subtitle: '24 Mutual connection',
//     image:
//       'https://www.aayag.com/wp-content/uploads/2021/08/free-profile-photo-whatsapp-3.png',
//   },
//   {
//     id: 3,
//     title: 'Margarita sent you a request          18h',
//     subtitle: '24 Mutual connection',
//     image:
//       'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//   },
//   {
//     id: 4,
//     title: 'Timmy sent you a request              34m',
//     subtitle: '24 Mutual connection',
//     image:
//       'https://media.istockphoto.com/photos/man-looking-picture-id1168966537?b=1&k=20&m=1168966537&s=170667a&w=0&h=11_v7GkTBvrMpto6iVO5oSI8VjxL5GdlraTLK_LizwM=',
//   },
//   {
//     id: 5,
//     title: 'Jaguar sent you a request              15s',
//     subtitle: '24 Mutual connection',
//     image:
//       'https://image.shutterstock.com/image-photo/young-adult-profile-picture-red-260nw-1655747050.jpg',
//   },
// ];
// const Home1 = () => {
//   return (
//     <SafeAreaView style={styles.safearea}>
//       <Header style={styles.container} title={Header} />
//       <Text style={styles.userName}>Ronda Rhousey</Text>
//       <Text style={styles.Role}>Product Designer</Text>
//       <Text style={styles.SysName}>@iamronda</Text>
//       <View style={[styles.container]}>
//         <View style={styles.SubMenu}>
//           <TouchableOpacity style={styles.SubMenuText}>
//             <Text>Feed</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.SubMenuText}>
//             <Text>About</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.SubMenuHover}>
//             <Text style={styles.SubMenuTextReq}>Requests</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style></View>
//       <FlatList
//         contentContainerStyle={{
//           flexDirection: 'column',
//           justifyContent: 'center',
//         }}
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// };

// export default Home1;

// const styles = StyleSheet.create({
//   container: {
//     width: 375,
//     height: 90,
//     marginTop: 10,
//     backgroundColor: '#ffffff',
//   },
//   safearea: {
//     backgroundColor: '#fff',
//     flex: 1,
//   },
//   Role: {
//     width: 126,
//     height: 22,
//     marginTop: 3,
//     marginLeft: 125,
//     opacity: 87,
//     fontSize: 16,
//     lineHeight: 22,
//     color: '#454545',
//   },

//   SysName: {
//     width: 90,
//     height: 22,
//     marginTop: 10,
//     marginLeft: 125,
//     opacity: 87,
//     fontSize: 16,
//     lineHeight: 22,
//   },
//   item: {
//     backgroundColor: '#ffffff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderWidth: 0.19,
//     borderTopColor: '#ECEEF1',
//     borderBottomColor: '#ECEEF1',
//     borderLeftColor: 'white',
//     borderRightColor: 'white',
//     marginTop: 1,
//     flexDirection: 'row',
//   },
//   title: {
//     fontSize: 16,
//     marginLeft: 10,
//     color: '#000000',
//   },
//   image: {
//     width: 55,
//     height: 55,
//     borderRadius: 51.72,
//     borderWidth: 1,
//     backgroundColor: '#fff',
//   },
//   SubText: {
//     width: 139,
//     height: 18,
//     fontSize: 13,
//     lineHeight: 18,
//     marginLeft: -260,
//     marginTop: 30,
//   },

//   SubMenuTextReq: {
//     width: 139,
//     height: 18,
//     fontSize: 13,
//     lineHeight: 18,
//     marginLeft: 19,
//     color: '#1778F2',
//     fontWeight: 'bold',
//     marginTop: 5,
//   },
//   SubMenu: {
//     width: 333,
//     height: 50,
//     marginLeft: 21,
//     marginTop: 10,
//     borderRadius: 25,
//     backgroundColor: '#F5F5F5',
//     flexDirection: 'row',
//   },
//   SubMenuText: {
//     width: 60,
//     height: 18,
//     marginLeft: 43,
//     fontSize: 13,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     color: '#C5C5C5',
//   },
//   SubMenuHover: {
//     width: 90,
//     height: 30,
//     marginLeft: 25,
//     marginTop: 10,
//     fontSize: 13,
//     borderRadius: 55,
//     color: 'blue',
//     backgroundColor: 'white',
//   },
//   userName: {
//     width: 150,
//     height: 24,
//     marginTop: 30,
//     marginLeft: 125,
//     opacity: 87,
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: '#000000',
//   },
// });
