/*
Group Number: 8
Group Name: KickChek
Course: CIS4030
Assignment: Final Project
Date: April 7, 2020
*/

import React, { Component } from 'react';
import { View, Image } from 'react-native';
import NavigationBar from './NavigationBar';
import { Text, Icon } from 'react-native-elements';
import { Colors } from '../Colors';
import { nike, ua } from '../data/SampleShoeObjects';

/* note: although this class in named "EditPhotoScreen", it serves the purpose of confirming the 
captured image with the user, rather than actually editing the image itself */

interface State {
    photo: string
}

export default class EditPhotoScreen extends Component<{ navigation: any }> {
    
    //set state to include the photo taken from the home screen
    readonly state: State = {
        photo: this.props.navigation.state.params.photo
    }
    
    constructor(props: any) {
        super(props)
        this.identifyShoes = this.identifyShoes.bind(this)
    }

    /*this is the function that would implement the tensorflow model to select the shoe based on the base64
    image captured. Since the tensorflow sdk for react-native is only weeks old, there is very little 
    documentation. This meant an error while loading the model turned fatal due to lack of available solutions*/
    identifyShoes() {
        // insert tensorflow code here
        this.props.navigation.navigate("ShoeFound", {shoe: nike})
    }
    
    //render the components to the screen
    render() {
        return (
            <View style={{ justifyContent:'flex-start', height:'100%', alignItems:'stretch', backgroundColor:Colors.primary_bg }}>
            <Text style={{ padding:10, fontSize:30, alignSelf:'center', color:Colors.font_bg}}>Your Shoe Image</Text>
            
            <Image source={{ uri: `data:image/jpeg;base64,${this.props.navigation.state.params.photo}` }} style={{width:'100%', height:'87%', alignSelf:'center'}}></Image>

            <Icon name='forward' color={Colors.primary_bg} reverse reverseColor='#76E76B' raised containerStyle={{ position:'absolute', bottom:70, right:10}}
                onPress={() => this.identifyShoes() }></Icon>
            
            <Icon name='close' color={Colors.primary_bg} reverse reverseColor='#AD3939' raised containerStyle={{ position:'absolute', bottom:70, left:10}}
                onPress={() => this.props.navigation.navigate("Camera")}></Icon>

            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }
}