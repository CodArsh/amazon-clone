import { View, StatusBar } from 'react-native'
import React from 'react'
import HomeScreen from './src/screens/HomeScreen'
import Router from './src/navigation/Router'

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={'#88dae0'} barStyle='dark-content' />
      <Router />
    </>
  )
}

export default App