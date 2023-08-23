import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DetailScreen from './DetailScreen';
import {TestStackParamList} from '../types/navigation';

type DetailStackParamList = {
  Detail: undefined;
};

const Stack = createNativeStackNavigator<DetailStackParamList>();

const DetailWrap = () => {
  return (
    <Stack.Navigator initialRouteName={'Detail'}>
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default DetailWrap;
