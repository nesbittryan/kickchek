import React from 'react';
import { View } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';

export default class App extends React.Component {

  render() {
    return(
      <View>
        <Text>This is text</Text>
        <Button title="This is a button"></Button>
      </View>
    );
  }
}
