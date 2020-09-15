import React from 'react';
import {View} from 'react-native';
import {VictoryBar, VictoryChart, VictoryGroup} from 'victory-native';

const Chart = () => {
  return (
    <View>
      <VictoryChart>
        <VictoryGroup>
          <VictoryBar />
          <VictoryBar />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default Chart;
