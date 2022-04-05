import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/Register'
import Otp from './src/Otp';
import StudentDetails from './src/StudentDetails';
import SchoolBoard from './src/SchoolBoard';
import AppTour from './src/AppTour';
import Home from './src/Home';
import Course from './src/Course';
import Video from './src/Video';
import Settings from './src/Settings'

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
        options={{ headerShown: false }} />
      <Stack.Screen
        name='AppTour'
        component={AppTour}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Course'
        component={Course}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Video'
        component={Video}
        options={{ headerShown: false }} />
      <Stack.Screen
        name='Settings'
        component={Settings}
        options={{ headerShown: false }} />

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