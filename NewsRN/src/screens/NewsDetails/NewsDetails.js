import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Linking,
  Alert,
} from 'react-native';
import {AppColor, AppStyles} from '../../utils';
import HeaderComponent from '../../components/Header/HeaderComponent';
import NewsDetailsStyle from './NewsDetailsStyle';
import moment from 'moment';

class NewsDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {
      newsDetails: {},
    };
  }

  componentDidMount() {
    this.setState({newsDetails: this.props.route.params.newsItemObj});
  }

  displayTitle = () => {
    const {newsDetails} = this.state;
    return <Text style={NewsDetailsStyle.newsTitle}>{newsDetails.title}</Text>;
  };

  displayAuthor = () => {
    const {newsDetails} = this.state;
    return (
      <Text style={NewsDetailsStyle.newsAuthor}>- {newsDetails.author}</Text>
    );
  };

  displayContent = () => {
    const {newsDetails} = this.state;
    return (
      <Text style={NewsDetailsStyle.newsContent}>{newsDetails.content}</Text>
    );
  };

  displayImage = () => {
    const {newsDetails} = this.state;
    return (
      <Image
        source={{uri: newsDetails.urlToImage}}
        style={NewsDetailsStyle.newsImage}
      />
    );
  };

  openURL = () => {
    const {newsDetails} = this.state;
    Linking.canOpenURL(newsDetails.url)
      .then(isFulfilled => {
        if (isFulfilled) {
          Linking.openURL(newsDetails.url);
        } else {
          Alert.alert('Oops!', 'Unable to open the URL. 123: ' + isFulfilled);
        }
      })
      .catch(() => {
        Alert.alert('Oops!', 'Unable to open the URL.skhdcksj');
      });
  };

  displayTime = () => {
    const {newsDetails} = this.state;
    return (
      <Text
        style={[NewsDetailsStyle.newsAuthor, {fontSize: 18, marginTop: 10}]}>
        {moment(newsDetails.publishedAt).format('DD MMM, YYYY hh:MM a')}
      </Text>
    );
  };

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <HeaderComponent title="News Details" />
        <ScrollView style={NewsDetailsStyle.scrollViewContainer}>
          {this.displayTitle()}
          {this.displayAuthor()}
          {this.displayImage()}
          {this.displayContent()}
          {this.displayTime()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default NewsDetails;
