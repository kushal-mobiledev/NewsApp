import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Image,
  ScrollView,
} from 'react-native';
import HeaderComponent from '../../components/Header/HeaderComponent';
import NewsDashboardStyles from './NewsDashboardStyles';
import axios from 'axios';
import {AppStyles, AppColor, AppStrings} from '../../utils';
import APIStrings from '../../webservice/APIStrings';
import Loader from '../../components/Loader/Loader';
import {NetworkContext} from '../../components/NoInternet/OfflineNotify';
import {Root, Toast} from 'native-base';
import * as CategoryArray from '../../model/CategoryModel.json';

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
      selectedCategory: 'Business',
      isLoading: false,
      isRefreshing: false,
      newsList: [],
    };
  }

  componentDidMount() {
    if (this.context.isConnected) {
      this.setState({isLoading: true}, () => {
        this.getNewsList();
      });
    }
  }

  onShowCountry = () => {};

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
                  this.setState(
                    {
                      categoryArray: categoryArr,
                    },
                    () => this.onRefresh(),
                  );
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

  getNewsList = () => {
    axios
      .get(
        `${APIStrings.baseURL}country=${APIStrings.country}&category=${this.state.selectedCategory}&apiKey=${APIStrings.apiKey}&pageSize=10&page=${this.page}`,
      )
      .then(response => {
        let responseJSON = response.data;

        this.setState(
          {newsList: responseJSON.articles, isLoading: false},
          () => {
            // alert(JSON.stringify(this.state.newsList));
            this.arrayholder = this.state.newsList;
          },
        );
      })
      .catch(error => {
        this.setState({isLoading: false});
        Toast.show({text: AppStrings.apiCallError});
      });
  };

  handleLoadMore = () => {
    if (!this.state.isLoading) {
      this.setState({isRefreshing: true});
      this.page = this.page + 1;
      this.loadMoreNewsList(this.page);
    }
  };

  loadMoreNewsList = pageIndex => {
    axios
      .get(
        `${APIStrings.baseURL}country=${APIStrings.country}&category=${this.state.selectedCategory}&apiKey=${APIStrings.apiKey}&pageSize=10&page=${pageIndex}`,
      )
      .then(response => {
        let responseJSON = response.data;
        this.setState(
          {
            newsList: [...this.state.newsList, ...responseJSON.articles],
            isRefreshing: false,
          },
          () => {
            this.arrayholder = this.state.newsList;
          },
        );
      })
      .catch(error => {
        this.setState({isRefreshing: false});
        Toast.show({text: AppStrings.apiCallError});
      });
  };

  onRefresh = () => {
    this.page = 1;
    this.setState({isLoading: true, newsList: []}, () => {
      this.getNewsList();
    });
  };

  gotoNewsDetailScreen = newsDetail => {
    this.props.navigation.navigate('NewsDetails', {
      newsItemObj: newsDetail,
    });
  };

  renderNewsList = (item, index) => {
    return (
      <TouchableOpacity onPress={() => this.gotoNewsDetailScreen(item)}>
        <View
          style={{
            marginVertical: 10,
          }}>
          {item.urlToImage !== null ? (
            <View>
              <Image
                source={{uri: item.urlToImage}}
                style={{
                  width: '100%',
                  height: 200,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  justifyContent: 'space-between',
                  width: '100%',
                }}>
                <Text />
                <View
                  style={{
                    backgroundColor: AppColor.blackOpacity,
                    width: '100%',
                  }}>
                  <Text
                    style={{
                      color: AppColor.white,
                      justifyContent: 'flex-end',
                      paddingVertical: 5,
                      paddingHorizontal: 5,
                    }}>
                    {item.title}
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <Text>{item.title}</Text>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  renderFooter = () => {
    return (
      <View style={NewsDashboardStyles.footer}>
        {this.state.isRefreshing ? <Loader loading={true} /> : null}
      </View>
    );
  };

  renderFlatlist = () => {
    return (
      <FlatList
        style={{marginHorizontal: 10, marginTop: 10}}
        data={this.state.newsList}
        extraData={this.state.newsList}
        keyExtractor={item => item.url.toString()}
        renderItem={({item, index}) => this.renderNewsList(item, index)}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isLoading}
            onRefresh={this.onRefresh}
            colors={[AppColor.bgColor]}
          />
        }
        ItemSeparatorComponent={this.renderSeparator}
        ListFooterComponent={this.renderFooter}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (!this.onEndReachedCalledDuringMomentum) {
            this.handleLoadMore();
            this.onEndReachedCalledDuringMomentum = true;
          }
        }}
        onMomentumScrollBegin={() => {
          this.onEndReachedCalledDuringMomentum = false;
        }}
      />
    );
  };

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <HeaderComponent
          title="Dashboard"
          showCountry={true}
          handleOnShowCountry={this.onShowCountry}
        />
        <View style={NewsDashboardStyles.mainContainer}>
          {this.renderTopHeadlinesSection()}
          <Loader loading={this.state.isLoading} />
          {this.context.isConnected ? this.renderFlatlist() : null}
        </View>
      </SafeAreaView>
    );
  }
}

export default NewsDashboard;
