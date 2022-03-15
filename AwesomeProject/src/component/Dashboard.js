// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
// import Icon from 'react-native-vector-icons';
// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';
// const Dashboard = props => {
//   const [state, setState] = useState();
//   const chart = useRef(null);
//   chart.data = [
//     {
//       country: 'Lithuania',
//       litres: 501.9,
//     },
//     {
//       country: 'Czech Republic',
//       litres: 301.9,
//     },
//     {
//       country: 'Ireland',
//       litres: 201.1,
//     },
//     {
//       country: 'Germany',
//       litres: 165.8,
//     },
//     {
//       country: 'Australia',
//       litres: 139.9,
//     },
//     {
//       country: 'Austria',
//       litres: 128.3,
//     },
//     {
//       country: 'UK',
//       litres: 99,
//     },
//     {
//       country: 'Belgium',
//       litres: 60,
//     },
//     {
//       country: 'The Netherlands',
//       litres: 50,
//     },
//   ];
//   useEffect(() => {
//     let x = am4core.create('chartdiv', 'XYChart');

//     // ...
//     chart.current = x;

//     // return () => {
//     //   x.dispose();
//     // };
//   }, []);
//   return (
//     <View style={styles.container}>
//       <View key={chart} style={{width: '100%', height: '500px'}}></View>

//       {/* <Text style={styles.HeaderText}>Борлуулалтын мэдээлэл</Text>
//         <View style={styles.FirstContainer}>
//           <Text style={styles.FirstContainerHeader}>
//             Хөлдөөгчний үр өгөөж +10%
//           </Text> */}
//       {/* <View style={styles.FirstConButtonAlign}>
//             <TouchableOpacity>
//               <View style={styles.FirstConButton}>
//                 <Text style={styles.FirstConButtonText}>Энэ 7 хоногт</Text>
//               </View>
//             </TouchableOpacity>

//             <TouchableOpacity
//               style={
//                 state == 'Энэ сард'
//                   ? styles.FirstConButton
//                   : styles.FirstClickedConButton1
//               }
//               onPress={() => {
//                 setState('Энэ сард');
//               }}>
//               <Text
//                 style={
//                   state == 'Dashboard'
//                     ? styles.FirstConButtonText
//                     : styles.FirstConButtonText1
//                 }>
//                 Энэ сард
//               </Text>
//             </TouchableOpacity> */}
//       {/* </View> */}
//       {/* </View> */}
//     </View>
//   );
// };

// export default Dashboard;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FAFAFA',
//     paddingBottom: '100%',
//     borderWidth: 1,
//   },
//   HeaderText: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     padding: '6%',
//   },
//   FirstContainer: {
//     width: '90%',
//     height: '100%',
//     marginLeft: '5%',
//     borderWidth: 1,
//     borderRadius: 15,
//     backgroundColor: 'white',
//   },
//   FirstContainerHeader: {
//     padding: '5%',
//     fontWeight: 'bold',
//     fontSize: 16,
//     letterSpacing: 0.1,
//   },
//   FirstConButton: {
//     width: '65%',
//     height: '40%',

//     marginLeft: '10%',
//     borderRadius: 20,
//     backgroundColor: '#585858',
//   },
//   FirstClickedConButton1: {
//     width: '40%',
//     height: '40%',
//     borderRadius: 20,
//     marginLeft: '5%',
//     backgroundColor: 'black',
//   },
//   FirstConButton1: {
//     width: '35%',
//     height: '40%',
//     color: 'white',
//     marginLeft: '5%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 20,
//     backgroundColor: '#F0F0F0',
//   },
//   FirstConButtonText: {
//     alignSelf: 'center',
//     marginTop: '6%',

//     color: 'white',
//   },
//   FirstConButtonText1: {
//     alignSelf: 'center',
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   FirstConButtonAlign: {
//     flexDirection: 'row',
//   },
// });

import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const Dashboard = () => {
  useEffect(props => {
    const a = am4core.create('chartdiv', am4charts.XYChart);

    // ... chart code goes here ...

    props.a = chart;
  });
  // Create chart

  //   componentWillUnmount() {
  //     if (this.chart) {
  //       this.chart.dispose();
  //     }
  //   }

  // Set data
  chart.data = [
    {
      country: 'Lithuania',
      litres: 501.9,
    },
    {
      country: 'Czechia',
      litres: 301.9,
    },
    {
      country: 'Ireland',
      litres: 201.1,
    },
  ];

  // Create series
  let series = chart.series.push(new am4charts.PieSeries());
  series.dataFields.value = 'litres';
  series.dataFields.category = 'country';
  return <View style={{width: '100%', height: '500px'}}></View>;
};
export default Dashboard;

const styles = StyleSheet.create({});
