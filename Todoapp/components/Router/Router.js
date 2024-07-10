import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Pages/StartScreen/indexStart';
import RegisterScreen from '../Pages/RegisterScreen/indexRegister';
import LoginScreen from '../Pages/LoginScreen/indexLogin';
import TaskScreen from '../Pages/TaskScreen/indexTask';
import TaskDetailScreen from '../Pages/TaskDetailScreen/indexTaskDetail';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen 
          name="Start" 
          component={StartScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Sign In" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Task" 
          component={TaskScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Task Detail" 
          component={TaskDetailScreen} 
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
