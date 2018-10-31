// @flow

import { createStackNavigator } from 'react-navigation'
import { MainScreen } from '../scenes'

export default createStackNavigator({
  MainScreen: {
    screen: MainScreen,
  },
})
