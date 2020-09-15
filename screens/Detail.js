import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Chart from './charts/Chart';

const Detail = () => {
  return (
    <View style={styles.container}>
      <Chart />
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
