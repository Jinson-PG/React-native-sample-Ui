import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/Register'
import Otp from './src/Otp';
import StudentDetails from './src/StudentDetails';
import SchoolBoard from './src/SchoolBoard';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Register'
        component={Register}
        options={{ headerShown: false }}

      />
      <Stack.Screen
        name='Otp'
        component={Otp}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='StudentDetails'
        component={StudentDetails}
        options={{ headerShown: false }} />

        <Stack.Screen
        name='SchoolBoard'
        component={SchoolBoard}
        options={{headerShown:false}}/>

    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack />

    </NavigationContainer>
  )
}