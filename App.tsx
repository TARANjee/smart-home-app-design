import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MainPage from './pages/MainPage'
import PlayPage from './pages/PlayPage'

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
      {/* <PlayPage/> */}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#090c08',
    justifyContent: 'space-evenly',

  },
})