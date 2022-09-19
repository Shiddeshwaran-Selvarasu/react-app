/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';

const AppbarStyle = StyleSheet.create({
  main: {
    flex: 0,
    backgroundColor: '#b3ffff',
    elevation: 24,
    padding: 5,
  },

  content: {
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
  },

  view: {
    flex: 0,
    width: '100%',
  },
});

export default AppbarStyle;
