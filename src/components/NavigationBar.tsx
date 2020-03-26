import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class NavigationBar extends Component<{ navigation: any, screen: string }> {

    constructor(props: any) {
        super(props)
    }
    
    render() {
        return (
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            {
                this.props.screen != 'Home' &&
                <Button
                    title="Snap a Pic"
                    onPress={() => this.props.navigation.navigate('Home')}/>
            }
            {
                this.props.screen != 'Profile' &&
                <Button
                title="My Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}/>
            }
            {
                this.props.screen != 'Wishlist' &&
                <Button
                    title="My Wishlist"
                    onPress={() => this.props.navigation.navigate('Wishlist')}/>
            }
        </View>
        )
    }
}