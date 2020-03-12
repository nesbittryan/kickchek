import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class Homescreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
            title="Go to About"
            onPress={() => this.props.navigation.navigate('Wishlist')}/>
        </View>
        )
    }
}