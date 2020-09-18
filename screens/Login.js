import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  TextInput,
  ToastAndroid,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useState} from 'react';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const Login = ({navigation}) => {
  const ref = useRef('txtPwd');
  const [usr, setUsr] = useState('');
  const [pwd, setPwd] = useState('');

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/login.png')}
        style={styles.background}>
        <View style={styles.inputContainer}>
          <View style={styles.infoContainer}>
            <Ionicons name="person" size={24} color="white" />
            <TextInput
              style={styles.input}
              returnKeyType="next"
              placeholder="Username"
              placeholderTextColor="mintcream"
              onSubmitEditing={() => ref.current.focus()}
              onChangeText={(text) => {
                setUsr(text);
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Fontisto name="locked" size={24} color="white" />
            <TextInput
              style={styles.input}
              returnKeyType="done"
              placeholder="Password"
              placeholderTextColor="mintcream"
              secureTextEntry
              autoCorrect={false}
              ref={ref}
              onChangeText={(text) => {
                setPwd(text);
              }}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              if (usr != '' && pwd != '') {
                if (usr === 'admin' && pwd === 'admin') {
                  navigation.navigate('Search');
                } else {
                  ToastAndroid.show('Login failed!', ToastAndroid.LONG);
                }
              } else {
                ToastAndroid.show('Login failed!', ToastAndroid.LONG);
              }
            }}>
            <Text style={styles.buttonText}>Login</Text>
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

export default Login;
