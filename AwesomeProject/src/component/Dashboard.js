import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {PieChart, ProgressChart} from 'react-native-chart-kit';

const Dashboard = props => {
  // const chartConfig = {
  //   backgroundGradientFrom: '#1E2923',
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientTo: '#08130D',
  //   backgroundGradientToOpacity: 0.5,
  //   color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  //   strokeWidth: 2, // optional, default 3
  //   barPercentage: 0.5,
  //   useShadowColorFromDataset: false, // optional
  // };
  const chartConfig = {
    backgroundColor: 'white',
    backgroundGradientFrom: '#1E2923',
    backgroundGradientTo: '#08130D',
    color: (opacity = 1) => '#fff',
    style: {
      borderRadius: 16,
    },
  };
  // const [state, setState] = useState();
  const screenWidth = Dimensions.get('window').width;
  // const chart = useRef(null);
  // const data = [
  //   {
  //     name: 'Seoul',
  //     population: 21500000,
  //     color: 'rgba(131, 167, 234, 1)',
  //     legendFontColor: '#7F7F7F',
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Toronto',
  //     population: 2800000,
  //     color: '#F00',
  //     legendFontColor: '#7F7F7F',
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Beijing',
  //     population: 527612,
  //     color: 'red',
  //     legendFontColor: '#7F7F7F',
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'New York',
  //     population: 8538000,
  //     color: '#ffffff',
  //     legendFontColor: '#7F7F7F',
  //     legendFontSize: 15,
  //   },
  //   {
  //     name: 'Moscow',
  //     population: 11920000,
  //     color: 'rgb(0, 0, 255)',
  //     legendFontColor: '#7F7F7F',
  //     legendFontSize: 15,
  //   },
  // ];
  const data = {
    labels: ['Swim', 'Bike'], // optional
    data: [0.4, 0.6],
  };
  // useEffect(() => {
  //   let x = am4core.create('chartdiv', 'XYChart');

  //   // ...
  //   chart.current = x;

  //   // return () => {
  //   //   x.dispose();
  //   // };
  // }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text>Bezier Line Chart</Text>
        <PieChart
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
      </View>

      {/* <Text style={styles.HeaderText}>Борлуулалтын мэдээлэл</Text>
        <View style={styles.FirstContainer}>
          <Text style={styles.FirstContainerHeader}>
            Хөлдөөгчний үр өгөөж +10%
          </Text> */}
      {/* <View style={styles.FirstConButtonAlign}>
            <TouchableOpacity>
              <View style={styles.FirstConButton}>
                <Text style={styles.FirstConButtonText}>Энэ 7 хоногт</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={
                state == 'Энэ сард'
                  ? styles.FirstConButton
                  : styles.FirstClickedConButton1
              }
              onPress={() => {
                setState('Энэ сард');
              }}>
              <Text
                style={
                  state == 'Dashboard'
                    ? styles.FirstConButtonText
                    : styles.FirstConButtonText1
                }>
                Энэ сард
              </Text>
            </TouchableOpacity> */}
      {/* </View> */}
      {/* </View> */}
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    paddingBottom: '100%',
    borderWidth: 1,
  },
  HeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: '6%',
  },
  FirstContainer: {
    width: '90%',
    height: '100%',
    marginLeft: '5%',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  FirstContainerHeader: {
    padding: '5%',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0.1,
  },
  FirstConButton: {
    width: '65%',
    height: '40%',

    marginLeft: '10%',
    borderRadius: 20,
    backgroundColor: '#585858',
  },
  FirstClickedConButton1: {
    width: '40%',
    height: '40%',
    borderRadius: 20,
    marginLeft: '5%',
    backgroundColor: 'black',
  },
  FirstConButton1: {
    width: '35%',
    height: '40%',
    color: 'white',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
  },
  FirstConButtonText: {
    alignSelf: 'center',
    marginTop: '6%',

    color: 'white',
  },
  FirstConButtonText1: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  FirstConButtonAlign: {
    flexDirection: 'row',
  },
});
