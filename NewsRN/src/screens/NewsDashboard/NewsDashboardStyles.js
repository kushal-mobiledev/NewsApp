import {StyleSheet, Dimensions} from 'react-native';
import {AppColor, AppFonts} from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

const NewsDashboardStyles = StyleSheet.create({
  topHeadlineText: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  categoryBtnStyle: {
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryListTextStyle: {
    fontSize: 20,
    fontFamily: AppFonts.semiBold,
  },
});

export default NewsDashboardStyles;
