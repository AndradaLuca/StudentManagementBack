/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Root           from './app/native/containers/Root';
import configureStore from './app/store/configureStore.prod.js';

const store = configureStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Root store={store} />
    );
  }
}
