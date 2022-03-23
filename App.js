import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './src/Register'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Register'
        component={Register}
        options={{headerShown:false}}

            />
    </Stack.Navigator>
  )
}
export default function App() {
  return(
      <NavigationContainer>
    <MyStack />

  </NavigationContainer>
  )
}