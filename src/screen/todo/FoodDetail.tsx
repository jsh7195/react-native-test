import {Image, Pressable, Text, View} from 'react-native';

const FoodDetail = () => {
  return (
    <View style={{backgroundColor: 'white', padding: 23}}>
      <View id="images" style={{flexDirection: 'row'}}>
        <View style={{width: 242, height: 300, paddingTop: 10}}>
          <Image source={require('../../assets/images/ham.png')} />
        </View>

        <View
          style={{
            width: 62,
            height: 300,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../assets/images/small_ham.png')}
            style={{width: 62, height: 62, borderRadius: 16}}
          />
          <Image
            source={require('../../assets/images/small_ham.png')}
            style={{width: 62, height: 62, borderRadius: 16}}
          />
          <Image
            source={require('../../assets/images/small_ham.png')}
            style={{width: 62, height: 62, borderRadius: 16}}
          />
          <Image
            source={require('../../assets/images/small_ham.png')}
            style={{width: 62, height: 62, borderRadius: 16}}
          />
        </View>
      </View>

      <View
        id="name"
        style={{width: 280, height: 76, flexDirection: 'row', paddingLeft: 18}}>
        <Text
          style={{
            color: '#000',
            fontSize: 24,
            fontStyle: 'normal',
            fontWeight: '500',
            width: 243,
          }}>
          Cheese Burger Whopper
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/heart.png')}
            style={{width: 34, height: 34}}
          />
        </View>
      </View>
      <View id="desc" style={{width: 220, height: 48, paddingLeft: 23}}>
        <Text>Ham, Cheddar Cheese, Onion, Cornichon, Salad, Tomato</Text>
      </View>
      <View
        id="price"
        style={{width: 173, height: 54, paddingLeft: 21, marginTop: 14}}>
        <Text style={{fontSize: 24, color: '#000', fontWeight: '500'}}>
          $8.99
        </Text>
      </View>
      <View
        id="submit"
        style={{
          width: 280,
          paddingLeft: 19,
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          id="select-count-item"
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 50,
            backgroundColor: '#D9D9D9',
            width: 90,
            height: 33,
            justifyContent: 'space-around',
            borderRadius: 9
          }}>
          <Pressable>
            <View
              style={{
                width: 27,
                height: 27,
                // marginRight: 6,
                backgroundColor: '#F1F1F1',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/minus.png')}
                style={{width: 24, height: 24}}
              />
            </View>
          </Pressable>
          <Text >1</Text>
          <Pressable>
            <View
              style={{
                width: 27,
                height: 27,
                // marginRight: 6,
                backgroundColor: '#F1F1F1',
                borderRadius: 8,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/images/add.png')} />
            </View>
          </Pressable>
        </View>

        <View
          style={{
            width: 150,
            height: 46,
            flexShrink: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            backgroundColor: '#FF6A6A',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              width: 108,
              height: 32,
              flexDirection: 'column',
              justifyContent: 'center',
              flexShrink: 0,
              color: '#FFF',
              textAlign: 'center',
              fontSize: 20,
              fontStyle: 'normal',
              fontWeight: '300',
            }}>
            Add To Cart
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FoodDetail;
