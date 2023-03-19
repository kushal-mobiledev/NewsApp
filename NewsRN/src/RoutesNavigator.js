import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// importing screen
import NewsDashboard from './screens/NewsDashboard/NewsDashboard';
import NewsDetails from './screens/NewsDetails/NewsDetails';
import Profile from './screens/Profile/Profile';
import Settings from './screens/Settings/Settings';
import CustomTabBar from './components/CustomTabBar/CustomTabBar';

const NewsTab = createBottomTabNavigator();
const NewsContentStack = createStackNavigator();

const NewsStack = () => {
  return (
    <NewsContentStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <NewsContentStack.Screen name="NewsDashboard" component={NewsDashboard} />
      <NewsContentStack.Screen name="NewsDetails" component={NewsDetails} />
    </NewsContentStack.Navigator>
  );
};

const NewsDashboardTabScreen = () => {
  return (
    <NewsTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}
      tabBar={props => <CustomTabBar {...props} />}>
      <NewsTab.Screen name="NewsDashboardStack" component={NewsStack} />
      <NewsTab.Screen name="Profile" component={Profile} />
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
