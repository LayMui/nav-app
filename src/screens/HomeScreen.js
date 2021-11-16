import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { testProperties } from '../utility/helper'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text
          {...testProperties('Button')}
          style={styles.title}
          onPress={() => navigation.navigate('Button')}
        >
          Button
        </Text>
        <Text
          {...testProperties('Calendar')}
          style={styles.title}
          onPress={() => navigation.navigate('Calendar')}
        >
          Calendar
        </Text>
       
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 5,
    paddingVertical: 2,
    borderWidth: 0.5,
    borderColor: '#20232a',
    borderRadius: 0.5,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default HomeScreen
