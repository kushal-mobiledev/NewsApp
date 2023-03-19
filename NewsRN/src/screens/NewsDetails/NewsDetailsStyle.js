import {StyleSheet, Dimensions} from 'react-native';
import {AppColor, AppFonts} from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

const NewsDetailsStyle = StyleSheet.create({
  scrollViewContainer: {
    width: '100%',
    height: '100%',
    marginTop: 10,
    alignSelf: 'center',
  },
  newsTitle: {
    color: AppColor.black,
    fontSize: DEVICE_WIDTH * 0.06,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginLeft: 10,
  },
  newsAuthor: {
    color: AppColor.greyText,
    fontSize: DEVICE_WIDTH * 0.05,
    textAlign: 'right',
    marginRight: 10,
  },
  newsImage: {
    width: '95%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 10,
  },
  newsContent: {
    color: AppColor.black,
    fontSize: DEVICE_WIDTH * 0.04,
    marginLeft: 10,
    marginTop: 10,
  },
  newsURL: {
    textDecorationLine: 'underline',
    color: 'blue',
  },
});

export default NewsDetailsStyle;
