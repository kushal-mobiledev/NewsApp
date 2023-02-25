import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import HeaderComponent from '../../components/Header/HeaderComponent';
import SettingsStyle from './SettingsStyle';
import moment from 'moment';
import axios from 'axios';
import {AppFonts, AppColor, AppStyles} from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class Settings extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <HeaderComponent title="Settings" />
      </SafeAreaView>
    );
  }
}

export default Settings;
