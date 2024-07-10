import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styleRegister';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerCircle1}></View>
      <View style={styles.headerCircle}></View>
      <Text style={styles.headerText}>FILL THE FORMS TO GET STARTED</Text>
      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text 
          style={styles.signInText} 
          onPress={() => navigation.navigate('Sign In')}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;
