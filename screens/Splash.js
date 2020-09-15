import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Splash = () => {
  return (
    <View style={styles.Container}>
      <Image style={styles.Image} source={require('../assets/splash.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: deviceWidth,
    height: deviceHeight,
    resizeMode: 'contain',
  },
});

export default Splash;
