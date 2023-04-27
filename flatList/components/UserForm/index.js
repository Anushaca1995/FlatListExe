import {View, Text, TextInput, Button} from 'react-native';
import {useState} from 'react';
import PropTypes from 'prop-types';
import style from './style';

const UserForm = props => {
  const [fullName, setFullName] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userAge, setUserAge] = useState('');
  const handleShow = () => {
    if (fullName && userLanguage && userAge) {
      const userData = {
        name: fullName,
        language: userLanguage,
        age: userAge,
      };
      console.log(userData);
      if (props.onFormSubmit) {
        props.onFormSubmit(userData);
      }
      setFullName('');
      setUserLanguage('');
      setUserAge('');
    }
  };
  return (
    <>
      <View style={style.view}>
        <Text style={style.caption}>User Form</Text>
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
        <Button title="Update" onPress={() => handleShow()} />
      </View>
    </>
  );
};
UserForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

UserForm.defaultProps = {
  onFormSubmit: () => {},
};

export default UserForm;
