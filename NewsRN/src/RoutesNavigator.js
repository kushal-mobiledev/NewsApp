import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// importing screen
import NewsDashboard from './screens/NewsDashboard/NewsDashboard';
import NewsDetails from './screens/NewsDetails/NewsDetails';
import Settings from './screens/Settings/Settings';

const NewsTab = createBottomTabNavigator();

const NewsDashboardTabScreen = () => {
  return (
    <NewsTab.Navigator screenOptions={{headerShown: false}}>
      <NewsTab.Screen name="NewsDashboard" component={NewsDashboard} />
      <NewsTab.Screen name="NewsDetails" component={NewsDetails} />
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
