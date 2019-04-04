import React, { Component } from 'react';
import { Provider }  from 'react-redux';
import StockInsights from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <StockInsights />
      </Provider>
    );
  }
}
