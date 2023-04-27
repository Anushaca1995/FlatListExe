import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import style from './style';
import {useState, useEffect} from 'react';
import UserForm from '../../components/UserForm';

const HomeScreen = props => {
  const [jumpText, setJumpText] = useState('');
  const [listData, setListData] = useState([
    {name: 'Anu', language: 'Malayalam', age: '27'},
    {name: 'Aby', language: 'English', age: '32'},
    {name: 'Jake', language: 'Hindi', age: '24'},
    {name: 'Luke', language: 'Tamil', age: '5'},
  ]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (props?.route?.params?.message) {
      setJumpText(props?.route?.params?.message);
    }
  }, [props]);

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

  const renderItemSeperator = () => {
    return <View style={style.itemBorder}></View>;
  };
  const renderItemBorder = () => {
    return <View style={style.border}></View>;
  };
  const renderModal = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Successfully Added</Text>
            <TouchableOpacity
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={style.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const renderFlatList = () => {
    return (
      <>
        <Text style={style.caption}>User List</Text>
        <ScrollView>
          <FlatList
            data={listData}
            renderItem={renderCellItem}
            ItemSeparatorComponent={renderItemSeperator}
            ListFooterComponent={renderItemBorder}
            ListHeaderComponent={renderItemBorder}
          />
        </ScrollView>
      </>
    );
  };
  const onFormSubmit = userObject => {
    setListData([...listData, userObject]);
    setModalVisible(true);
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: '#ffe6e6'}}>
        <UserForm onFormSubmit={onFormSubmit} />
        <Text style={style.jumpText}>{jumpText}</Text>
        {renderFlatList()}
        {renderModal()}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
