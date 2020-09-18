import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Chart from './charts/Chart';
import train from '../data/arpu_train.json';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Detail = ({route}) => {
  const {msisdn} = route.params;
  const {label} = route.params;

  const [status, setStatus] = useState('Good');
  const [year, setYear] = useState(0);

  const new_label = Math.round(label * 100) / 100;

  useEffect(() => {
    if (new_label * 100 < 30) {
      setStatus('Bad');
    } else if (new_label * 100 >= 30 && new_label <= 60) {
      setStatus('Normal');
    } else {
      setStatus('Good');
    }

    train.forEach((item) => {
      if (msisdn === item.msisdn) {
        setYear(item.COL_14);
        return;
      }
    });
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
        <View style={styles.container}>{/* <Chart data={data} /> */}</View>
        <View style={styles.scoringText}>
          <Text style={styles.textDe}>
            1. Credit Value:{' '}
            <Text
              style={{
                color:
                  status === 'Bad'
                    ? '#ff4500'
                    : status === 'Normal'
                    ? '#ffd700'
                    : '#00ff7f',
              }}>
              {label}
            </Text>
          </Text>
          <Text style={styles.textDe}>
            2. Credit Status:{' '}
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
          <Text>3. Date of birth: {year}</Text>
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
    marginTop: 10,
    flex: 1,
  },
  background: {
    width: deviceWidth,
    height: deviceHeight,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDe: {
    fontSize: 16,
    marginTop: 15,
  },
});

export default Detail;
