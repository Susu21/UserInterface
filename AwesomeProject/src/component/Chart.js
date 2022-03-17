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

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Pie from 'react-native-pie';

export default Chart => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingVertical: 15,
          flexDirection: 'row',
          width: 350,
          justifyContent: 'space-between',
        }}>
        {/* <Pie
          radius={80}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          strokeCap={'butt'}
        />
        <Pie
          radius={80}
          innerRadius={50}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          strokeCap={'butt'}
        />
      </View>
      <View
        style={{
          paddingVertical: 15,
          flexDirection: 'row',
          width: 350,
          justifyContent: 'space-between',
        }}>
        <Pie
          radius={80}
          innerRadius={60}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          dividerSize={4}
          strokeCap={'round'}
        />
        <Pie
          radius={80}
          innerRadius={60}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          dividerSize={6}
          strokeCap={'butt'}
        />
      </View>
      <View
        style={{
          paddingVertical: 15,
          width: 350,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pie
          radius={80}
          sections={[
            {
              percentage: 10,
              color: '#C70039',
            },
            {
              percentage: 20,
              color: '#44CD40',
            },
            {
              percentage: 30,
              color: '#404FCD',
            },
            {
              percentage: 40,
              color: '#EBD22F',
            },
          ]}
          dividerSize={6}
          strokeCap={'butt'}
        /> */}
        <View style={{width: 350, alignItems: 'center'}}>
          <Pie
            radius={65}
            innerRadius={40}
            sections={[
              {
                percentage: 50,
                color: 'blue',
              },
            ]}
            strokeCap={'butt'}
            backgroundColor="#ddd"
          />
          <View style={styles.gauge}>
            <Text style={styles.gaugeText}>60%</Text>
          </View>
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
