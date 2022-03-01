import React, {useRef} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNJsxParser from 'react-native-jsx-parser';
import Feed from '../component/Feed';
import Header from '../component/Header';
const Home = () => {
  const Views =
    "<View>      <TouchableOpacity onPress={() => navigation.navigate('OnPressFeed')}>        <Image          style={styles.profilePic}          source={{            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLqfekg_kitC_QJ5kgBUTh2tt5EIcxEnQDQ&usqp=CAU',          }}        />      </TouchableOpacity>      <Header style={styles.container}>Header</Header>      <Text style={styles.title}>Profile</Text>      <Text style={styles.userName}>Ronda Rhousey</Text>      <Text style={styles.Role}>Product Designer</Text>      <Text style={styles.SysName}>@iamronda</Text>      <Feed style={styles.container} />    </View>";
  console.log('View', Views.toString());
  return (
    <>
      <RNJsxParser
        // bindings={bindings}
        components={Home}
        renderInWrapper={false}
        jsx={Views}
      />
    </>
  );
  // const Asdada = {Views};

  // const stringJsx = '<><Views></>';
  // <RNJsxParser bindings={Views} components={Home} jsx={String} />;

  //   return (
  //     <SafeAreaView style={styles.safearea}>
  //       <ScrollView>
  //         <View>
  //           <Text>{Views}</Text>
  //         </View>

  //         {/* <Header style={styles.container} title={Header} /> */}
  //         {/* <PRange style={styles.container} title={PRange} /> */}
  //       </ScrollView>
  //     </SafeAreaView>
  //   );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 90,
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  safearea: {
    backgroundColor: 'white',
    flex: 1,
  },
  Role: {
    width: 126,
    height: 22,
    marginTop: 3,
    marginLeft: 125,
    opacity: 87,
    fontSize: 16,
    lineHeight: 22,
    color: '#454545',
  },
  userName: {
    width: 150,
    height: 24,
    marginTop: 30,
    marginLeft: 125,
    opacity: 87,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },
  SysName: {
    width: 90,
    height: 22,
    marginTop: 6,
    marginLeft: 125,
    opacity: 87,
    fontSize: 16,
    lineHeight: 22,
  },
  SubMenuHover: {
    width: 90,
    height: 30,
    marginLeft: 20,

    fontSize: 13,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
  },
  SubMenuTextReq: {
    height: 18,
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
    color: '#1778F2',
    fontWeight: 'bold',
  },
  SubMenuText: {
    width: 70,
    height: 18,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 13,
    alignSelf: 'center',
    flexDirection: 'row',
    color: '#C5C5C5',
  },
  SubMenu: {
    width: 333,
    height: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
  },
});
