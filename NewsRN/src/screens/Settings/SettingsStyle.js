import {StyleSheet, Dimensions} from 'react-native';
import {AppFonts, AppColor} from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

const SettingsStyle = StyleSheet.create({
  optionsInfoText: {
    flexWrap: 'wrap',
    fontSize: DEVICE_WIDTH * 0.05,
  },
  infoView: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default SettingsStyle;
