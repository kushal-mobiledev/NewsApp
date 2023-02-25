import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TextInput,
  Dimensions,
} from 'react-native';
import {DrawerActions} from '@react-navigation/native';
import HeaderComponent from '../../components/Header/HeaderComponent';
import NewsDashboardStyles from './NewsDashboardStyles';
import axios from 'axios';
import {AppStyles, AppColor, AppFonts, AppStrings} from '../../utils';
import APIStrings from '../../webservice/APIStrings';
import Icon from 'react-native-vector-icons/FontAwesome';
import Loader from '../../components/Loader/Loader';
import {NetworkContext} from '../../components/NoInternet/OfflineNotify';
import {Root, Toast} from 'native-base';

const DEVICE_WIDTH = Dimensions.get('window').width;

class NewsDashboard extends React.Component {
  static contextType = NetworkContext;

  constructor(props) {
    super();
    this.page = 1;
    this.onEndReachedCalledDuringMomentum = false;
    this.arrayholder = [];
    this.state = {};
  }

  componentDidMount() {}

  renderSeparator = () => <View style={NewsDashboardStyles.separatorView} />;

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <Text>News Dashboard</Text>
      </SafeAreaView>
    );
  }
}

export default NewsDashboard;
