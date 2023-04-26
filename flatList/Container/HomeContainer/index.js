import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import style from './style';
import {useState} from 'react';

const HomeScreen = props => {
  const [fullName, setFullName] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userAge, setUserAge] = useState('');
  const [listData, setListData] = useState([
    {name: 'Anu', language: 'Malayalam', age: '27'},
    {name: 'Aby', language: 'English', age: '32'},
    {name: 'Jake', language: 'Hindi', age: '24'},
    {name: 'Luke', language: 'Tamil', age: '5'},
  ]);
  const renderCellItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          height: 70,
          borderBottomWidth: 1,
          borderColor: 'white',
          padding: 10,
        }}
        onPress={() => {
          props.navigation.navigate('User', {listData: item});
        }}>
        <Text style={style.text}>Name: {item.name}</Text>
        <Text style={style.text}>Language: {item.language}</Text>
        <Text style={style.text}>Age: {item.age}</Text>
      </TouchableOpacity>
    );
  };
  const renderPersonal = () => {
    return (
      <View style={style.view}>
        <TextInput
          style={style.inputField}
          onChangeText={newText => setFullName(newText)}
          defaultValue={fullName}
          placeholder="Name"
        />

        <TextInput
          style={style.inputField}
          onChangeText={newText => setUserLanguage(newText)}
          defaultValue={userLanguage}
          placeholder="Language"
        />

        <TextInput
          style={style.inputField}
          onChangeText={newText => setUserAge(newText)}
          defaultValue={userAge}
          placeholder="Age"
        />
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: '#ffe6e6'}}>
        <Text style={style.caption}>User List</Text>
        <FlatList data={listData} renderItem={renderCellItem} />
        {renderPersonal()}
        <Button
          title="Show"
          onPress={() => {
            if (fullName && userLanguage && userAge) {
              const userData = {
                name: fullName,
                language: userLanguage,
                age: userAge,
              };
              console.log(userData);
              setListData([...listData, userData]);
              setFullName('');
              setUserLanguage('');
              setUserAge('');
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
