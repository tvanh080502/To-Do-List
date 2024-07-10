import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styleLogin';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerCircle}></View>
      <View style={styles.headerCircle1}></View>
      <View>
        <View style={styles.phoneScreen}>
          <Text style={styles.headerText}>WELCOME BACK</Text>
          <ImageBackground 
            source={require('../../../assets/image/undraw_mobile_login.png')}
            style={styles.imageContainer}
          />
        </View>
      </View>
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity>
        <Text style={styles.resetText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Task')}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
