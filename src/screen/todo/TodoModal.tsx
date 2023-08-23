import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

const TodoModal = () => {
  const nv = useNavigation();
  return (
    <View>
      <Text>TodoModal</Text>
      <Button title="close" onPress={() => nv.goBack()} />
    </View>
  );
};

export default TodoModal;
