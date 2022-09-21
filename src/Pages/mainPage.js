/* eslint-disable prettier/prettier */
import React from 'react';
import {ToastAndroid} from 'react-native';

import * as react from 'react-native';
import {Appbar} from 'react-native-paper';

import AppbarStyle from '../style/appBarStyle';
import ButtonStyle from '../style/buttonStyle';
import TextStyle from '../style/textStyle';
import ViewStyle from '../style/viewStyle';
import MiscStyle from '../style/miscStyle';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      displayText: ['🎉 Hello World 🎉', '🎉 React Native 🎉'],
      i: 0,
      size: 2,
      toast: true,
      modalVisible: false,
    };
  }

  render() {
    const showToastWithGravity = msg => {
      ToastAndroid.showWithGravity(
        msg,
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
        ToastAndroid.showWithGravityAndOffset,
      );
    };

    let text = '';

    const onPressOff = () =>
      this.setState({toast: this.state.toast ? false : true});

    const onPressChange = () => {
      if (this.state.i < this.state.size - 1) {
        this.setState({i: this.state.i + 1});
      } else {
        this.setState({i: 0});
      }
      if (this.state.toast) {
        showToastWithGravity('Text Changed');
      }
    };

    const {modalVisible} = this.state;

    const setModalVisible = () => {
      this.setState({modalVisible: false});
    };

    const changeModalState = () => {
      this.setState({
        modalVisible: true,
      });
    };

    const addText = () => {
      setModalVisible();
      if (text.trim().length < 1) {
        showToastWithGravity('Empty Text!!!');
      } else {
        this.setState({
          size: this.state.displayText.push('🎉 ' + text + ' 🎉'),
        });
        showToastWithGravity('text ' + text + 'is added');
      }
    };

    return (
      <react.SafeAreaView style={ViewStyle.main}>
        <react.View style={AppbarStyle.view}>
          <react.StatusBar backgroundColor="#b3ffff" barStyle="dark-content" />
          <Appbar.Header style={AppbarStyle.main}>
            <Appbar.Content
              title="My App"
              style={AppbarStyle.content}
              titleStyle={AppbarStyle.title}
            />
            <Appbar.Action icon="plus" onPress={changeModalState} />
            <Appbar.Action icon="plus" onPress={changeModalState} />
          </Appbar.Header>
        </react.View>
        <react.View style={ViewStyle.main}>
          <react.View style={MiscStyle.lineStyle} />
          <react.Text style={TextStyle.default}>
            {this.state.displayText[this.state.i]}
          </react.Text>
          <react.View style={ViewStyle.horizondal}>
            <react.TouchableOpacity
              style={ButtonStyle.button}
              onPress={onPressChange}>
              <react.Text style={ButtonStyle.text}>Change Text</react.Text>
            </react.TouchableOpacity>
            <react.TouchableOpacity
              style={ButtonStyle.button}
              onPress={onPressOff}>
              <react.Text style={ButtonStyle.text}>
                {this.state.toast ? 'Turn Off Toast' : 'Turn On Toast'}
              </react.Text>
            </react.TouchableOpacity>
          </react.View>
          <react.Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={setModalVisible}>
            <react.View style={ViewStyle.modal}>
              <react.View style={ViewStyle.modalSec}>
                <react.TextInput
                  style={MiscStyle.textInput}
                  onChangeText={txt => (text = txt)}
                />
                <react.View style={ViewStyle.model2}>
                  <react.Pressable
                    style={[ButtonStyle.modal]}
                    onPress={setModalVisible}>
                    <react.Text style={TextStyle.modal}>Cancel</react.Text>
                  </react.Pressable>
                  <react.Pressable
                    style={[ButtonStyle.modal]}
                    onPress={addText}>
                    <react.Text style={TextStyle.modal}>Add Text</react.Text>
                  </react.Pressable>
                </react.View>
              </react.View>
            </react.View>
          </react.Modal>
        </react.View>
      </react.SafeAreaView>
    );
  }
}

export default MainPage;
