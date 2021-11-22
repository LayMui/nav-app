import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
import ButtonScreen from './src/screens/ButtonScreen'
import CalendarScreen from './src/screens/CalendarScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Button: ButtonScreen,
    Calendar: CalendarScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  }
)

export default createAppContainer(navigator)
