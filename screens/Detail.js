import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import Chart from './charts/Chart';
import Loan from '../data/recharge.json';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Detail = ({route, navigation}) => {
  const {msisdn} = route.params;
  const {label} = route.params;
  const {data} = route.params;

  const [status, setStatus] = useState('Good');

  const new_label = Math.round(label * 1000) / 1000;

  useEffect(() => {
    if (new_label * 100 < 30) {
      setStatus('Bad');
    } else if (new_label * 100 >= 30 && new_label * 100 <= 60) {
      setStatus('Normal');
    } else {
      setStatus('Good');
    }
  }, []);

  return (
    <ImageBackground
      source={require('../assets/background.png')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.msisdnDecorate}>
          <Text style={[styles.text, {color: '#98fb98'}]}>
            MSISDN: {msisdn}
          </Text>
        </View>
        <View
          style={[
            styles.container,
            {
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
            },
          ]}>
          <Chart data={data} />
          <Text style={{fontSize: 18, marginTop: 15, marginHorizontal: 130}}>
            Recharge Chart
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Loan.forEach((item) => {
                if (msisdn === item.msisdn) {
                  navigation.navigate('Detail1', {
                    msisdn: item.msisdn,
                    label: item.label,
                    data: item.data,
                  });
                }
              });
            }}>
            <Text style={styles.buttonText}>Go to Loan Chart</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scoringText}>
          <Text style={styles.textDe}>
            Credit Value:{' '}
            <Text
              style={{
                color:
                  status === 'Bad'
                    ? '#ff4500'
                    : status === 'Normal'
                    ? '#ffd700'
                    : '#00ff7f',
              }}>
              {new_label}
            </Text>
          </Text>
          <AnimatedCircularProgress
            padding={10}
            style={{marginTop: 20}}
            size={165}
            width={22}
            fill={new_label * 100}
            tintColor="#ff0000"
            tintColorSecondary="#00ff00"
            backgroundColor="#3d5875"
            rotation={-90}
            duration={2000}
            arcSweepAngle={180}>
            {(fill) => <Text>{Math.round(fill * 10) / 10}%</Text>}
          </AnimatedCircularProgress>
          <Text style={styles.textDe}>
            <Text
              style={{
                color:
                  status === 'Bad'
                    ? '#ff4500'
                    : status === 'Normal'
                    ? '#ffd700'
                    : '#00ff7f',
              }}>
              {status}
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
  },
  msisdnDecorate: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoringText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: deviceWidth,
    height: deviceHeight,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDe: {
    fontSize: 20,
  },
  button: {
    width: 250,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 25,
    borderRadius: 25,
    backgroundColor: 'white',
  },
});

export default Detail;
