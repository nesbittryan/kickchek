import React, { Component, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { Colors } from '../Colors';

export default class NavigationBar extends Component<{ navigation: any, screen: string }> {

    constructor(props: any) {
        super(props)
    }
    
    render() {
        return (
        <View style={{ position:'absolute', bottom:0, backgroundColor: Colors.accent_bg, width:'100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', alignSelf: 'center' }}>
 
            <NavigationTab onPress={() => { this.props.navigation.navigate("Wishlist") }} label="Wishlist" icon="list" selected={this.props.screen == "Wishlist"}/>

            <NavigationTab onPress={() => { this.props.navigation.navigate("Home") }} label="Camera" icon="camera" selected={this.props.screen == "Home"}/>

            <NavigationTab onPress={() => { this.props.navigation.navigate("Profile") }} label="Profile" icon="face" selected={this.props.screen == "Profile"}/>
           
        </View>
        )
    }
}

export class NavigationTab extends Component<{onPress: () => void, icon: string, label: string, selected: boolean}> {
    render() {
        let color = (this.props.selected) ? Colors.font_bg : Colors.primary_fg;
        return (
            <TouchableOpacity style={{padding:10}}
                disabled={ this.props.selected } onPress={ this.props.onPress }>
                
                <Icon color={color} name={this.props.icon}></Icon>
                <Text style={{color:color}}>{this.props.label}</Text>

            </TouchableOpacity>
        )
    }
}