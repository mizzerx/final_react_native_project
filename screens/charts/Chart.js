import React from 'react';
import {View} from 'react-native';
import {VictoryBar, VictoryChart, VictoryGroup} from 'victory-native';

const Chart = ({props}) => {
  return (
    <View>
      <VictoryChart>
        <VictoryGroup offset={20}>
          <VictoryBar data={props.data} />
          <VictoryBar />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default Chart;
