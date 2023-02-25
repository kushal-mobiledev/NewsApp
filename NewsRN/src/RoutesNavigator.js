import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// importing screen
import NewsDashboard from './screens/NewsDashboard/NewsDashboard';
import NewsSource from './screens/NewsSource/NewsSource';
import Settings from './screens/Settings/Settings';
import CustomTabBar from './components/CustomTabBar/CustomTabBar';

const NewsTab = createBottomTabNavigator();

const NewsDashboardTabScreen = () => {
  return (
    <NewsTab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={{
        showLabel: false,
      }}>
      <NewsTab.Screen name="NewsDashboard" component={NewsDashboard} />
      <NewsTab.Screen name="NewsSource" component={NewsSource} />
      <NewsTab.Screen name="Settings" component={Settings} />
    </NewsTab.Navigator>
  );
};

const RoutesNavigator = () => {
  // const [isUserSignedIn, setIsUserSignedIn] = useState(false);

  return (
    <NavigationContainer>
      <NewsDashboardTabScreen />
    </NavigationContainer>
  );
};

export default RoutesNavigator;
