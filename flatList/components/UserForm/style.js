import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputField: {
    backgroundColor: 'white',
    height: 45,
    margin: 15,
    paddingHorizontal: 10,
  },
  text: {
    fontFamily: 'Georgia',
    padding: 1,
  },
  jumpText: {
    flex: 1,
    color: '#660033',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  border: {marginTop: 10, backgroundColor: '#800000', height: 2},
  itemBorder: {marginTop: 5, backgroundColor: '#ff9999', height: 1},
  view: {marginTop: 10},
  caption: {
    flex: 1,
    color: '#660033',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Cochin',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
