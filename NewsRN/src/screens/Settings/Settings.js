import React, {Component} from 'react';
import {View, Text, SafeAreaView, Linking, Alert} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import HeaderComponent from '../../components/Header/HeaderComponent';
import SettingsStyle from './SettingsStyle';
import {AppStyles} from '../../utils';

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
        <Text style={SettingsStyle.optionsInfoHeaderText}>App Version</Text>
        <Text style={SettingsStyle.optionsInfoText}>
          {DeviceInfo.getVersion()}
        </Text>
      </View>
    );
  };

  renderAPIUsageInfo = () => {
    return (
      <View style={SettingsStyle.infoView}>
        <Text style={SettingsStyle.optionsInfoHeaderText}>Powered By</Text>
        <Text style={SettingsStyle.optionsInfoText}>NewsAPI.org</Text>
        <Text style={SettingsStyle.optionsInfoText}>Flaticon.com</Text>
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
        <Text style={SettingsStyle.optionsInfoHeaderText}>Developed by</Text>
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
