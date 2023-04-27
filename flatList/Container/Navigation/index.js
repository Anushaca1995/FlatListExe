import HomeScreen from '../HomeContainer';
import UserScreen from '../UserScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Navigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="User" component={UserScreen} />
    </Stack.Navigator>
  );
};
export default Navigation;
