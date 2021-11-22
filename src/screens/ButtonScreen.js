import React from 'react'
import { StyleSheet, Button } from 'react-native'

import { testProperties } from '../utility/helper'

const ButtonScreen = ({ navigation }) => {
  return (
    <>
      <Button
        onPress={() => navigation.navigate('Calendar')}
        title='Learn More'
        color='#841584'
        {...testProperties('CustomButton')}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default ButtonScreen
