import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const DetailScreen = () => {
  const nv = useNavigation();
  return (
    <View style={{marginTop: 100}}>
      <Text style={{color: 'black'}}>DetailScreen</Text>
    </View>
  );
};

export default DetailScreen;
