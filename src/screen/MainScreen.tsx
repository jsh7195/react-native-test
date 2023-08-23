import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const MainScreen = () => {
  const nv = useNavigation();
  return (
    <View style={{marginTop: 100}}>
      <Text style={{color: 'black'}}>test</Text>
      <Button title="detail" onPress={() => nv.navigate('Detail')} />
    </View>
  );
};

export default MainScreen;
