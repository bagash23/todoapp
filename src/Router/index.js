import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Dashboard from '../pages/home/dashboard'
import Login from '../pages/auth/login'
import Register from '../pages/auth/register'


const Stack = createNativeStackNavigator()
const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Register'  >
        <Stack.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})