// @flow

import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './styles'
import Counter from '../../components/Counter'
import { connect } from 'react-redux'

class MainScreen extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Counter />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    value: state.counter.value,
  }
}

export default connect(mapStateToProps)(MainScreen)
