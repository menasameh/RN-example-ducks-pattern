// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'
import Counter from '../../components/Counter'

export default class MainScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    )
  }
}
