import {StyleSheet, Dimensions} from 'react-native';
import {AppColor, AppFonts} from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

const NewsDashboardStyles = StyleSheet.create({
  mainContainer: {
    marginLeft: 10,
    marginTop: 20,
    backgroundColor: AppColor.lightGray,
    width: '95%',
    height: '100%',
  },
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
