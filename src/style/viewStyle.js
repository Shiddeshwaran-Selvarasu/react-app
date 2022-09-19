/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const ViewStyle = StyleSheet.create({
  main: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  modalSec: {
    flex: 0,
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  model2:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  horizondal: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ViewStyle;
