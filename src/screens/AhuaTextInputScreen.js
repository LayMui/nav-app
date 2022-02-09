import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TextInput } from 'react-native'
import { testProperties } from '../utility/helper'

const AhuaTextInputScreen = ({ navigation }) => {
  const [text, setText] = useState('')

  return (
    <>
      <View style={styles.container}>
        <Text>Enter mobile Number:</Text>
        <TextInput
          style={{ height: 40, color: 'red'}}
          keyboardType='numeric'
          placeholder='Enter your mobile number!'
          onChangeText={(newText) => setText(newText)}
          {...testProperties('PhoneNumberInput')}
        />

       
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
})

export default AhuaTextInputScreen
