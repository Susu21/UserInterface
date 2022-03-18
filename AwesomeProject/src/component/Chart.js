// import React from 'react';
// import {useWindowDimensions, View} from 'react-native';
// import RenderHtml from 'react-native-render-html';
// import {WebView} from 'react-native-webview';
// import am5 from '@amcharts/amcharts5';
// const MyHtmlFile = require('../../index.html');
// export default function App() {
//   const {width} = useWindowDimensions();
//   // const root = am5.Root.new('chart');

//   return (
//     <RenderHtml
//       contentWidth={width}
//       source={{
//         html: MyHtmlFile,
//         baseUrl: 'web/',
//         // baseUrl: 'web/',
//       }}
//       style={{flex: 1}}
//       startInLoadingState
//       javaScriptEnabled={true}
//       domStorageEnabled={true}
//       useWebKit
//       scalesPageToFit
//       scrollEnabled={false}
//     />
//   );

//   // <View>
//   //   <WebView
//   //     source={{
//   //       html: 'https://github.com/facebook/react-native',
//   //     }}
//   //     style={{flex: 1}}
//   //     startInLoadingState
//   //     javaScriptEnabled={true}
//   //     domStorageEnabled={true}
//   //     useWebKit
//   //     scalesPageToFit
//   //     scrollEnabled={false}
//   //   />
//   // </View>
//   // );
// }
// // export default  Chart;

import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pie from 'react-native-pie';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
export default Chart => {
  const [fill, setFill] = useState(30);
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: 15,
          flexDirection: 'row',
          width: 350,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginLeft: '15%',
          }}>
          <View style={{width: '17%', alignItems: 'center'}}>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
              }}>
              60%
            </Text>
            <Text
              style={{
                justifyContent: 'center',
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Бэлэн
            </Text>
          </View>
          <AnimatedCircularProgress
            size={120}
            width={8}
            fill={fill}
            duration={5000}
            arcSweepAngle={360}
            rotation={0}
            lineCap={'round'}
            tintColor="#38E0CF"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="grey">
            {fill => <Text>{fill + '%'}</Text>}
          </AnimatedCircularProgress>

          <AnimatedCircularProgress
            size={120}
            width={8}
            fill={15}
            duration={5000}
            rotation={0}
            arcSweepAngle={360}
            lineCap={'round'}
            tintColor="#FDC144"
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="grey"
          />
          {/* <Pie
            radius={65}
            innerRadius={60}
            sections={[
              {
                percentage: 50,
                color: 'blue',
              },
            ]}
            strokeCap="rounded"
            backgroundColor="#fff"
          /> */}
          {/* <View style={styles.gauge}>
            <Text style={styles.gaugeText}>60%</Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', height: 1050},
  gauge: {
    position: 'absolute',
    width: 90,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
});
