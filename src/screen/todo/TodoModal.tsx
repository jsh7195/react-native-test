import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import { _TodoNavigationProp } from './TodoList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TodoStackParamList } from './TodoWrap';
import { useNavigationWrap } from '../../common/useNavigationWrap';

type TodoModalNavigationProp = NativeStackScreenProps<TodoStackParamList, 'Modal'>;

const TodoModal = ({ navigation, route }:TodoModalNavigationProp) => {
  console.log('navigation',route.params)
  return (
    <View>
      <Text>TodoModal</Text>
      <Button title="close" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TodoModal;
