import React from 'react';
import {View} from 'react-native';
import {VictoryBar, VictoryChart, VictoryGroup} from 'victory-native';

const Chart1 = (props) => {
  return (
    <View>
      <VictoryChart domainPadding={{x: 30}}>
        <VictoryGroup offset={20}>
          <VictoryBar data={props.data} x="time" y="total_loan_paid" />
        </VictoryGroup>
      </VictoryChart>
    </View>
  );
};

export default Chart1;
