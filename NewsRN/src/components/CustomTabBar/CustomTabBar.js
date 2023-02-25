import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
} from 'react-native';
import {AppColor, AppImage} from '../../utils';

const tabBarHeight = Platform.OS === 'android' ? 60 : 90;

const CustomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.bottomTabContainerStyle}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        var tabLabel = '';

        const renderIcon = () => {
          switch (route.name) {
            case 'NewsDashboard':
              tabLabel = 'NewsDashboard';
              return (
                <Image
                  source={
                    isFocused ? AppImage.newsIconActive : AppImage.newsIcon
                  }
                  style={styles.imageStyle}
                />
              );
            case 'NewsSource':
              tabLabel = 'NewsSource';
              return (
                <Image
                  source={isFocused ? AppImage.sourceActive : AppImage.source}
                  style={styles.imageStyle}
                />
              );
            case 'Settings':
              tabLabel = 'Settings';
              return (
                <Image
                  source={
                    isFocused ? AppImage.settingsActive : AppImage.settings
                  }
                  style={styles.imageStyle}
                />
              );
            default:
              return null;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabButton}>
            <View style={styles.tabView}>
              {renderIcon()}
              <Text
                style={
                  isFocused ? styles.activeTextStyle : styles.inactiveTextStyle
                }>
                {tabLabel}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabContainerStyle: {
    flexDirection: 'row',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: 'rgba(255,255, 255, 0.5)',
  },
  imageStyle: {
    width: 35,
    height: 35,
  },
  activeTextStyle: {
    color: AppColor.blue,
    fontSize: 11,
    lineHeight: 10.97,
  },
  inactiveTextStyle: {
    color: AppColor.black,
    fontSize: 11,
    lineHeight: 10.97,
  },
  tabButton: {
    flex: 1,
    height: tabBarHeight,
  },
  tabView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: tabBarHeight,
  },
});

export default CustomTabBar;
