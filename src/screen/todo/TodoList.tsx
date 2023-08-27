import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, Text} from 'react-native';
import { TodoStackParamList } from './TodoWrap';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigationWrap } from '../../common/useNavigationWrap';

export type _TodoNavigationProp = NativeStackNavigationProp<TodoStackParamList>;

const TodoList = () => {
  
  // const nv = useNavigation<_TodoNavigationProp>();

  const nv = useNavigationWrap();
  
  return (
    <ScrollView>
      <Text>TodoList</Text>
      <Button title="modal" onPress={() => nv.navigate('Modal', { userId: 'shji'})} />
      <Button title="detail" onPress={() => nv.navigate('Detail')} />
      <Text style={{height: 100}}>test</Text>
      <Text style={{height: 100}}>test</Text>
      <Text style={{height: 100}}>test</Text>
      <Text style={{height: 100}}>test</Text>
      <Text style={{height: 100}}>test</Text>
      <Text style={{height: 100}}>test</Text>
      <Text style={{height: 100}}>test</Text>
    </ScrollView>
  );
};

export default TodoList;
