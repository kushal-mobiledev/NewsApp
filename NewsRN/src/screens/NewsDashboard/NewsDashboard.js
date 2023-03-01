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
  ScrollView,
  Dimensions,
} from 'react-native';
import HeaderComponent from '../../components/Header/HeaderComponent';
import NewsDashboardStyles from './NewsDashboardStyles';
import axios from 'axios';
import {AppStyles, AppColor, AppFonts, AppStrings} from '../../utils';
import APIStrings from '../../webservice/APIStrings';
import Loader from '../../components/Loader/Loader';
import {NetworkContext} from '../../components/NoInternet/OfflineNotify';
import {Root, Toast} from 'native-base';
import * as CategoryArray from '../../model/CategoryModel.json';

const DEVICE_WIDTH = Dimensions.get('window').width;

class NewsDashboard extends React.Component {
  static contextType = NetworkContext;

  constructor(props) {
    super();
    this.page = 1;
    this.onEndReachedCalledDuringMomentum = false;
    this.arrayholder = [];
    this.state = {
      categoryArray: CategoryArray.newsCategory,
      selectedCategoryIndex: 0,
      selectedCategory: 'Work',
    };
  }

  componentDidMount() {}

  onShowCountry = () => {
    alert('hi');
  };

  renderSeparator = () => <View style={NewsDashboardStyles.separatorView} />;

  renderTopHeadlinesSection = () => {
    return (
      <View>
        <Text style={NewsDashboardStyles.topHeadlineText}>Top Headlines</Text>
        <ScrollView horizontal nestedScrollEnabled>
          {this.state.categoryArray.map((item, index) => {
            return (
              <TouchableOpacity
                key={`Category${item.categoryID}`}
                onPress={() => {
                  this.setState({
                    selectedCategory: item.categoryName,
                    selectedCategoryIndex: index,
                  });
                  let categoryArr = this.state.categoryArray;
                  categoryArr.forEach(element => {
                    if (item.categoryID === element.categoryID) {
                      element.isSelected = true;
                    } else {
                      element.isSelected = false;
                    }
                  });
                  this.setState({
                    categoryArray: categoryArr,
                  });
                }}
                style={{
                  ...NewsDashboardStyles.categoryBtnStyle,
                  backgroundColor: item.isSelected
                    ? AppColor.selectedCategory
                    : AppColor.transparent,
                  borderColor: item.isSelected
                    ? AppColor.selectedCategory
                    : AppColor.lightGray,
                }}>
                <View>
                  <Text
                    style={{
                      ...NewsDashboardStyles.categoryListTextStyle,
                      color: item.isSelected
                        ? AppColor.white
                        : AppColor.darkGray,
                    }}>
                    {item.categoryName}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  renderNewsList = () => {
    return <Text>News List</Text>;
  };

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <HeaderComponent
          title="Dashboard"
          showCountry={true}
          handleOnShowCountry={this.onShowCountry}
        />
        <View
          style={{
            marginLeft: 10,
            marginTop: 20,
          }}>
          {this.renderTopHeadlinesSection()}
          {this.renderNewsList()}
        </View>
      </SafeAreaView>
    );
  }
}

export default NewsDashboard;
