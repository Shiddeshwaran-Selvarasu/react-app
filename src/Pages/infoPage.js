/* eslint-disable prettier/prettier */
import React, {Component} from 'react';

import * as react from 'react-native';
import {Appbar} from 'react-native-paper';

import AppbarStyle from '../style/appBarStyle';
import TextStyle from '../style/textStyle';
import ViewStyle from '../style/viewStyle';

import {StackActions} from '@react-navigation/native';

const popAction = StackActions.pop(1);

export default class InfoScreen extends Component {
  render() {
    return (
      <react.SafeAreaView style={ViewStyle.main}>
        <react.View style={AppbarStyle.view}>
          <react.StatusBar backgroundColor="#b3ffff" barStyle="dark-content" />
          <Appbar.Header style={AppbarStyle.main}>
            <Appbar.BackAction
              onPress={() => {
                this.props.navigation.dispatch(popAction);
              }}
            />
            <Appbar.Content
              title="Info"
              titleStyle={AppbarStyle.title}
            />
          </Appbar.Header>
        </react.View>
        <react.View style={ViewStyle.main}><react.Text style={TextStyle.default}>Info</react.Text></react.View>
      </react.SafeAreaView>
    );
  }
}
