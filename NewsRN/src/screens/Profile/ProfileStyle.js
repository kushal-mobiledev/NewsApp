import {StyleSheet, Dimensions} from 'react-native';
import {AppColor, AppFonts} from '../../utils';
import {actuatedNormalize} from '../../utils/Utility';

const DEVICE_WIDTH = Dimensions.get('window').width;

const ProfileStyle = StyleSheet.create({
  newsInfoHeader: {
    fontFamily: AppFonts.bold,
    color: AppColor.greyText,
    fontSize: DEVICE_WIDTH * 0.04,
  },
  socialMediaBtn: {
    paddingHorizontal: actuatedNormalize(15),
    paddingVertical: actuatedNormalize(10),
    borderRadius: 10,
  },
});

export default ProfileStyle;
