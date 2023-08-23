import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TestStackParamList} from '../types/navigation';
import MainScreen from '../screen/MainScreen';
import {Text} from 'react-native';
import DetailScreen from '../screen/DetailScreen';
import HomeScreen from '../screen/HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavi = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => {
            return <Text>홈</Text>;
          },
        }}
      />
      <Tab.Screen
        name="Main"
        component={MainScreen}
        options={{
          tabBarIcon: () => {
            return <Text>Main</Text>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavi;
