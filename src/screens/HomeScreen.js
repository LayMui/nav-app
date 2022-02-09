import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { testProperties } from '../utility/helper'

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <Text
          {...testProperties('NewCreation')}
          style={styles.title}
          onPress={() => navigation.navigate('Button')}
        >
          I am a New Creation
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          {...testProperties('DaughterOfKingdom')}
          style={styles.title}
          onPress={() => navigation.navigate('Button')}
        >
          I am a daughter of the Kingdom
        </Text>
      </View>
      <View style={styles.container}>
        <Text
          {...testProperties('Calendar')}
          style={styles.title}
          onPress={() => navigation.navigate('Calendar')}
        >
          Have A Date with the King
        </Text>
      </View>

      <View style={styles.container}>
        <Text
          {...testProperties('AhuaTextInput')}
          style={styles.title}
          onPress={() => navigation.navigate('AhuaTextInput')}
        >
          Ahua TextInput
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 1,
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
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default HomeScreen
