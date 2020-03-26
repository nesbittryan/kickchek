import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { getData, storeData } from '../AsyncStorage'
import NavigationBar from './NavigationBar';

interface State {

}

const wishlist_key: string = "wishlist"

export default class ProfileScreen extends Component<{ navigation: any }> {
    
    constructor(props: any) {
        super(props)
    }
    
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Your Profile</Text>
            <NavigationBar navigation={this.props.navigation} screen='Profile'/>
        </View>
        )
    }
}