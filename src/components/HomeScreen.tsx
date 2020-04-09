/*
Group Number: 8
Group Name: KickChek
Course: CIS4030
Assignment: Final Project
Date: April 7, 2020
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import NavigationBar from './NavigationBar';
import { Colors } from '../Colors';

export default class Homescreen extends Component<{ navigation: any }> {
    
    //render the components to the screen
    render() {
        return (
        <View style={{ justifyContent:'center', height:'100%', alignItems:'center' }}>
            <RNCamera ref={ref => { this.camera = ref; }} style={{ width: '100%', height: '100%'}}/>
            
            <Icon size={30} name="add" reverse raised color={Colors.font_bg} containerStyle={{ position:'absolute', bottom:65,}} onPress={this.takePicture.bind(this)} />
                
            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }

    /* when the capture button is clicked, save the image to async storage and navigate to the edit screen,
    passing along the photo */
    takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true, doNotSave: true};
          const data = await this.camera.takePictureAsync(options);
          this.props.navigation.navigate('Edit',  { photo: data.base64 })
        }
    };
}