// @flow

import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type Props = {
  value?: number,
}

export default class Counter extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Counter</Text>
        <Text style={styles.text}>{this.props.value ?? 0}</Text>
      </View>
    )
  }
}
