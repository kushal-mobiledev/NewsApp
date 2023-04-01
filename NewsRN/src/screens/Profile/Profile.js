import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Linking,
  Alert,
} from 'react-native';
import {AppColor, AppImage, AppStyles} from '../../utils';
import HeaderComponent from '../../components/Header/HeaderComponent';
import ProfileStyle from './ProfileStyle';
import {actuatedNormalize} from '../../utils/Utility';

const linkedinURL = 'https://www.linkedin.com/in/kushaldesai1990';
const facebookURL =
  'https://www.facebook.com/profile.php?id=100088242940535&mibextid=LQQJ4d';
const instagramURL =
  'https://instagram.com/kushal.mobiledev?igshid=YmMyMTA2M2Y=';
const portfolioURL = 'https://kushaldesai1990wor.wixsite.com/my-site';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

class Profile extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  displayProfileImage = () => {
    return (
      <View
        style={{
          width: DEVICE_WIDTH,
          height: DEVICE_HEIGHT * 0.2,
          backgroundColor: AppColor.selectedCategory,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: actuatedNormalize(-110),
            alignItems: 'center',
          }}>
          <Image
            source={AppImage.profilePic}
            style={{
              width: actuatedNormalize(150),
              height: actuatedNormalize(150),
              borderRadius: actuatedNormalize(75),
              borderWidth: 5,
              borderColor: AppColor.white,
            }}
          />
          <Text style={{fontSize: actuatedNormalize(20), fontWeight: 'bold'}}>
            Kushal Desai
          </Text>
          <Text style={{fontSize: actuatedNormalize(20)}}>
            Mobile App Developer
          </Text>
        </View>
      </View>
    );
  };

  displayEmail = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: actuatedNormalize(130),
        }}>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: AppColor.selectedCategory,
              paddingHorizontal: actuatedNormalize(20),
              paddingVertical: actuatedNormalize(10),
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={AppImage.emailIcon}
              style={{resizeMode: 'contain', width: 25, height: 25}}
            />
            <Text
              style={{
                color: AppColor.white,
                fontSize: actuatedNormalize(14),
                marginLeft: actuatedNormalize(20),
                textAlign: 'center',
              }}>
              kushaldesai1990.work@gmail.com
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  displayPortfolioBtn = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: actuatedNormalize(40),
          marginBottom: actuatedNormalize(40),
        }}>
        <TouchableOpacity onPress={this.onPressPortfolio}>
          <View
            style={{
              backgroundColor: AppColor.selectedCategory,
              paddingHorizontal: actuatedNormalize(20),
              paddingVertical: actuatedNormalize(10),
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: AppColor.white,
                fontSize: actuatedNormalize(18),
                textAlign: 'center',
              }}>
              What do I do ?
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  displayLinkedInBtn = () => {
    return (
      <TouchableOpacity onPress={this.onPressLinkedIn}>
        <View style={[ProfileStyle.socialMediaBtn]}>
          <Image
            source={AppImage.linkedInIcon}
            style={{width: 40, height: 40}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  displayFBBtn = () => {
    return (
      <TouchableOpacity onPress={this.onPressFacebook}>
        <View style={[ProfileStyle.socialMediaBtn]}>
          <Image source={AppImage.fbIcon} style={{width: 40, height: 40}} />
        </View>
      </TouchableOpacity>
    );
  };

  displayInstagramBtn = () => {
    return (
      <TouchableOpacity onPress={this.onPressInstagram}>
        <View style={[ProfileStyle.socialMediaBtn]}>
          <Image source={AppImage.instaIcon} style={{width: 40, height: 40}} />
        </View>
      </TouchableOpacity>
    );
  };

  displaySocialMedia = () => {
    return (
      <View style={{marginTop: actuatedNormalize(24)}}>
        <Text style={{textAlign: 'center', fontSize: actuatedNormalize(16)}}>
          Social Media
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: actuatedNormalize(5),
            justifyContent: 'space-evenly',
          }}>
          {this.displayLinkedInBtn()}
          {this.displayFBBtn()}
          {this.displayInstagramBtn()}
        </View>
      </View>
    );
  };

  onPressLinkedIn = () => {
    Linking.canOpenURL(linkedinURL)
      .then(isSupported => {
        Linking.openURL(linkedinURL).catch(() => {
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

  onPressFacebook = () => {
    Linking.canOpenURL(facebookURL)
      .then(isSupported => {
        Linking.openURL(facebookURL).catch(() => {
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

  onPressInstagram = () => {
    Linking.canOpenURL(instagramURL)
      .then(isSupported => {
        Linking.openURL(instagramURL).catch(() => {
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

  onPressPortfolio = () => {
    Linking.canOpenURL(portfolioURL)
      .then(isSupported => {
        Linking.openURL(portfolioURL).catch(() => {
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

  render() {
    return (
      <SafeAreaView style={AppStyles.rootViewContainer}>
        <HeaderComponent title="Profile" />
        <ScrollView>
          {this.displayProfileImage()}
          {this.displayEmail()}
          {this.displaySocialMedia()}
          {this.displayPortfolioBtn()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Profile;
