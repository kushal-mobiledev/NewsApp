import {StyleSheet, Dimensions} from 'react-native';
import {AppFonts} from '../../utils';

const DEVICE_WIDTH = Dimensions.get('window').width;

const SettingsStyle = StyleSheet.create({
  optionsInfoHeaderText: {
    flexWrap: 'wrap',
    fontSize: DEVICE_WIDTH * 0.05,
    fontFamily: AppFonts.light,
  },
  optionsInfoText: {
    flexWrap: 'wrap',
    fontSize: DEVICE_WIDTH * 0.05,
    fontFamily: AppFonts.medium,
  },
  infoView: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SettingsStyle;
