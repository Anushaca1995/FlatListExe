import HomeScreen from '../HomeContainer';
import UserScreen from '../UserScreen';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const getHomeStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
      </Stack.Group>
    );
  };
  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen name="Auth" component={AuthScreen} />
      </Stack.Group>
    );
  };
  const MyTabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    );
  };
  const AuthScreen = () => {
    return (
      <View>
        <Text>Auth Screen</Text>
      </View>
    );
  };
  return MyTabs();
  // <Stack.Navigator>
  //   {isUserLoggedIn ? getHomeStack() : getAuthStack()}

  // </Stack.Navigator>
};
export default Navigation;
