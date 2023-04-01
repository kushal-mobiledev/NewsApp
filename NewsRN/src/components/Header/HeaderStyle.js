import {StyleSheet, Dimensions} from 'react-native';
import AppColor from '../../utils/AppColor';
import AppFonts from '../../utils/AppFonts';

const DEVICE_WIDTH = Dimensions.get('window').width;

const HeaderStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
    height: '8%',
    backgroundColor: AppColor.selectedCategory,
  },
  title: {
    color: AppColor.white,
    fontSize: DEVICE_WIDTH * 0.06,
    textAlign: 'center',
    fontFamily: AppFonts.regular,
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
    backgroundColor: AppColor.white,
  },
  modalView: {
    height: '100%',
  },
  modalHeading: {
    fontSize: 24,
    fontFamily: AppFonts.bold,
  },
});

export default HeaderStyle;
