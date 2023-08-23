/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import SettingScreen from '../screen/SettingScreen';
import TodoWrap from '../screen/todo/TodoWrap';

type BottomParams = {
  Home: undefined;
  Todo: undefined;
  Setting: undefined;
};

const Tab = createBottomTabNavigator<BottomParams>();

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
        name="Todo"
        component={TodoWrap}
        options={{
          tabBarIcon: () => {
            return <Text>Todo</Text>;
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarIcon: () => {
            return <Text>Setting</Text>;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavi;
