import {Button, Image, Text, View} from 'react-native';
import { useNavigationWrap } from '../../common/useNavigationWrap';

const TodoDetail = () => {
  const nv = useNavigationWrap();
  return (
    <View style={{padding: 40, justifyContent: 'center', alignItems: 'center'}}>
      <View
        id="item-box"
        style={{
          width: 259,
          height: 72,
          marginTop: 16,
          flexDirection: 'row',
        }}>
        <Image
          source={require('../../assets/images/sample_img.png')}
          style={{width: 72, height: 72, borderRadius: 16, marginRight: 16}}
        />
        <View style={{justifyContent: 'center', marginRight: 28}}>
          <Text>Pizza Italiano</Text>
        </View>
        <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
          <View style={{flexDirection: 'row', backgroundColor: '#C2FFB8', borderRadius: 18, width: 52, height: 22, justifyContent: 'center', alignItems :'center' }}>
            <Image
              id="star"
              source={require('../../assets/images/star.png')}
              style={{width: 15, height: 15, alignItems: 'flex-end', marginRight: 3}}
            />
            <Text>4/5</Text>
          </View>
        </View>
      </View>

      <View
        id="line"
        style={{
          width: 259,
          height: 1,
          borderColor: '#DEDEDE',
          borderStyle: 'solid',
          borderWidth: 1,
          marginTop: 16,
        }}></View>
        <Button title="food detail" onPress={() => nv.navigate('Food')}/>
    </View>
  );
};

export default TodoDetail;
