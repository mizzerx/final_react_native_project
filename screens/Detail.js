import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Chart from './charts/Chart';

const Detail = ({route}) => {
  const {msisdn} = route.params;
  const {label} = route.params;
  const data = [
    {
      x: msisdn,
      y: label,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Chart data={data} />
      </View>
      <View style={styles.container}>
        <Text>{msisdn}</Text>
      </View>
      <View style={styles.container}>
        <Text>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
