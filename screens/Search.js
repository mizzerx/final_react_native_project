import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Search = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.background}>
        <View style={styles.inputContainer}>
          <View style={styles.infoContainer}>
            <AntDesign name="search1" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholderTextColor="mintcream"
              placeholder="Phone number"
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Detail')}>
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240,255,255,0.1)',
    padding: 20,
    borderRadius: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 5,
    width: 260,
    marginLeft: 20,
    color: 'mediumspringgreen',
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
  buttonText: {
    fontSize: 17,
    color: 'mediumturquoise',
  },
});

export default Search;
