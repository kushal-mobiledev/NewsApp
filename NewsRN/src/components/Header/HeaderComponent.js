import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import HeaderStyle from './HeaderStyle';
import Argentina from '../../assets/images/flags/argentina';

const HeaderComponent = props => {
  return (
    <View style={HeaderStyle.container}>
      <Image source={null} style={{width: 25, height: 25, marginLeft: 5}} />

      <Text style={HeaderStyle.title}>{props.title}</Text>

      {props.showCountry ? (
        <TouchableOpacity
          onPress={props.handleOnShowCountry}
          style={{marginRight: 20}}>
          <View
            style={{
              width: 35,
              height: 35,
              borderRadius: 20,
            }}>
            <Argentina />
          </View>
        </TouchableOpacity>
      ) : (
        <Image source={null} style={{width: 25, height: 25, marginLeft: 5}} />
      )}
    </View>
  );
};

export default HeaderComponent;
