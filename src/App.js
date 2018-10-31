// @flow

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './state/store'
import StackNavigator from './navigation'

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    )
  }
}
