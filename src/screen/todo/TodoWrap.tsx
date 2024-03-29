import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import TodoList from './TodoList';
import TodoDetail from './TodoDetail';
import TodoModal from './TodoModal';
import FoodDetail from './FoodDetail';

export type TodoStackParamList = {
  List: undefined;
  Detail: undefined;
  Food: undefined;
  Modal: { userId: string};
};

const Stack = createNativeStackNavigator<TodoStackParamList>();

const TodoWrap = () => {
  return (
    <Stack.Navigator initialRouteName={'List'}>
      <Stack.Screen name="List" component={TodoList} />
      <Stack.Screen name="Detail" component={TodoDetail} />
      <Stack.Screen name="Food" component={FoodDetail} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="Modal"
          component={TodoModal}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default TodoWrap;
