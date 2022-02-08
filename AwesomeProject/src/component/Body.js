import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, FlatList,SafeAreaView} from 'react-native';

const Body = (props) => {
    const Item = ({ title }) => (
        <View style ={styles.item}>
          <Text style={styles.title}>Title</Text>
        </View>
      )
      const renderItem = ({ item }) =>(
        <Item title = {item.title} />
      )
      const DATA = [
        {
          id:1,
          title: "Mohan sent you a request"
        },
        {
          id:2,
          title: "Mohan sent you a request"
        },
        {
          id:3,
          title: "Mohan sent you a request"
        },
      ];
  return (
      <>
        <SafeAreaView>
      <FlatList
      contentContainerStyle={{flexGrow:1,justifyContent: 'center'}}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id} 
      /> </SafeAreaView>
      </>
      )}

export default Body;

const styles = StyleSheet.create({
    item : {
        backgroundColor: '#FFFFFF',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth: 0.6,
      },
      title : {
        fontSize: 16,
      },
    });