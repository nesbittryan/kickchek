import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class WishlistScreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Wishlist Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
        )
    }
}