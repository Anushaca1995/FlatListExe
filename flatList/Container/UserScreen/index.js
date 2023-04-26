import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const UserScreen = ({route}) => {
  const {name, language, age} = route.params.listData;
  return (
    <View style={style.viewField}>
      <Text style={style.caption}>User Details</Text>
      <View style={style.textView}>
        <Text style={style.subCaption}>Personal Details</Text>
        <Text style={style.textField}>Full Name: {name}</Text>
        <Text style={style.textField}>Age: {age}</Text>
        <Text style={style.textField}>Language: {language}</Text>
      </View>
    </View>
  );
};

export default UserScreen;
