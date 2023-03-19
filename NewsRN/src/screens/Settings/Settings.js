import React, {Component} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Linking,
  Dimensions,
  Alert,
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

import HeaderComponent from '../../components/Header/HeaderComponent';
import SettingsStyle from './SettingsStyle';
import {AppFonts, AppColor, AppStyles} from '../../utils';
import {err} from 'react-native-svg/lib/typescript/xml';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const profileURL = 'https://www.linkedin.com/in/kushaldesai1990';

class Settings extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {}

  renderAppVersion = () => {
    return (
      <View style={SettingsStyle.infoView}>
        <Text style={SettingsStyle.optionsInfoText}>App Version</Text>
        <Text style={SettingsStyle.optionsInfoText}>
          {DeviceInfo.getVersion()}
        </Text>
      </View>
    );
  };

  renderAPIUsageInfo = () => {
    return (
      <View style={SettingsStyle.infoView}>
        <Text style={SettingsStyle.optionsInfoText}>Powered By</Text>
        <Text style={SettingsStyle.optionsInfoText}>NewsAPI.org</Text>
      </View>
    );
  };

  redirectToLinkedIn = () => {
    Linking.canOpenURL(profileURL)
      .then(isSupported => {
        Linking.openURL(profileURL).catch(() => {
          Alert.alert(
            'Something went wrong!',
            'Unable to open the link at this time.',
          );
        });
      })
      .catch(() => {
        Alert.alert(
          'Something went wrong!',
          'Unable to open the link at this time.',
        );
      });
  };

  renderProfileInfo = () => {
    return (
      <View style={SettingsStyle.infoView}>
        <Text style={SettingsStyle.optionsInfoText}>Developed by</Text>
        <Text
          style={[
            SettingsStyle.optionsInfoText,
            {paddingLeft: 10, textDecorationLine: 'underline', color: 'blue'},
          ]}
          onPress={this.redirectToLinkedIn}>
          Kushal Desai
        </Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <HeaderComponent title="Settings" />
        <View style={{marginTop: 20}}>
          {this.renderAppVersion()}
          {this.renderAPIUsageInfo()}
          {this.renderProfileInfo()}
        </View>
      </SafeAreaView>
    );
  }
}

export default Settings;
