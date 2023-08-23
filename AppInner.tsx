import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {TestStackParamList} from './src/types/navigation';
import MainScreen from './src/screen/MainScreen';
import DetailScreen from './src/screen/DetailScreen';
import BottomNavi from './src/components/BottomNavi';

const Stack = createNativeStackNavigator<TestStackParamList>();

const AppInner = () => {
  return (
    <>
      <BottomNavi />
    </>
  );
};

export default AppInner;
