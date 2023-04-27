import React from 'react';
import {View, Text, Button} from 'react-native';
import style from './style';
const UserScreen = props => {
  const listData = props?.route?.params?.listData;

  return (
    <View style={style.viewField}>
      {listData != undefined ? (
        <>
          {getView(listData)}
          <Button
            title="Go to Home"
            onPress={() => {
              props.navigation.jumpTo('Home', {
                message: 'Return From User: ' + listData.name,
              });
            }}
          />
        </>
      ) : (
        <>
          <Text style={style.caption}>No User Chosen</Text>
        </>
      )}
    </View>
  );
};

const getView = listData => {
  return (
    <>
      <Text style={style.caption}>User Details</Text>
      <View style={style.textView}>
        <Text style={style.subCaption}>Personal Details</Text>
        <Text style={style.textField}>Full Name: {listData.name}</Text>
        <Text style={style.textField}>Age: {listData.age}</Text>
        <Text style={style.textField}>Language: {listData.language}</Text>
      </View>
    </>
  );
};

export default UserScreen;
