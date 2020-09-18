import React from 'react';
import {View, Dimensions, StyleSheet, Image} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Splash = () => {
  return (
    <View style={styles.Container}>
      <Image source={require('../assets/splash.png')} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: deviceWidth,
    height: deviceHeight,
    resizeMode: 'contain',
  },
});

export default Splash;
