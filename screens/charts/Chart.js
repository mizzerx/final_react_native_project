import React from 'react';
import {View} from 'react-native';
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
} from 'victory-native';

const Chart = (props) => {
  return (
    <View>
      <VictoryChart domainPadding={{x: 30}}>
        <VictoryGroup offset={20}>
          <VictoryBar
            data={props.data}
            x="time"
            y="recharge_amount"
          />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default Chart;
