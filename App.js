import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default class App extends React.Component {
  state = {
    visibility: false,
    DateDisplay: '',
  };

  handleConfirm = (date) => {
    this.setState({DateDisplay: date.toUTCString()});
  };
  onPressCancel = () => {
    this.setState({visibility: false});
  };
  onPressButton = () => {
    this.setState({visibility: true});
  };

  render() {
    return (
      <View
        style={{
          flex:1,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Button title="PickDate" onPress={this.onPressButton} />
        <Text>{this.state.DateDisplay}</Text>
        <DateTimePickerModal
          isVisible={this.state.visibility}
          onConfirm={this.handleConfirm}
          onCancel={this.onPressCancel}
          mode="date"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
