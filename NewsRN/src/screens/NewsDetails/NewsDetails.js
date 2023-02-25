import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {AppStyles} from '../../utils';
import HeaderComponent from '../../components/Header/HeaderComponent';
import NewsDetailsStyle from './NewsDetailsStyle';

class NewsDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <HeaderComponent title="News Details" />
      </SafeAreaView>
    );
  }
}

export default NewsDetails;
