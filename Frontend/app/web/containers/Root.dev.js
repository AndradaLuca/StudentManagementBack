import React, { Component } from 'react';
import { Provider }             from 'react-redux';
import StudentManagementWeb from './App';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <StudentManagementWeb />
        </div>
      </Provider>
    );
  }
}
