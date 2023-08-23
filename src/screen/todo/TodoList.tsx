import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, Text} from 'react-native';

const TodoList = () => {
  const nv = useNavigation();
  return (
    <ScrollView>
      <Text>TodoList</Text>
      <Button title="modal" onPress={() => nv.navigate('Modal')} />
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
