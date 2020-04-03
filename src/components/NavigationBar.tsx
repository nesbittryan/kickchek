import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

export default class NavigationBar extends Component<{ navigation: any, screen: string }> {

    constructor(props: any) {
        super(props)
    }
    
    render() {
        return (
        <View style={{ marginTop:7, width:'100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignSelf: 'center' }}>
            {
                this.props.screen != 'Home' &&
                <Button
                    containerStyle={{ width:'40%'}}
                    title="Camera"
                    onPress={() => this.props.navigation.navigate('Home')}/>
            }
            {
                this.props.screen != 'Profile' &&
                <Button
                    containerStyle={{ width:'40%'}}
                    title="Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}/>
            }
            {
                this.props.screen != 'Wishlist' &&
                <Button
                    containerStyle={{ width:'40%'}}
                    title="Wishlist"
                    onPress={() => this.props.navigation.navigate('Wishlist')}/>
            }
        </View>
        )
    }
}