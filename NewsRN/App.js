/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import RoutesNavigator from './src/RoutesNavigator';
import OfflineNotify from './src/components/NoInternet/OfflineNotify';

class App extends React.Component {
  constructor(props) {
    super();
  }

  componentDidMount() {}

  render() {
    return (
      <OfflineNotify>
        <RoutesNavigator />
      </OfflineNotify>
    );
  }
}

export default App;
