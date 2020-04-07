import React, { Component } from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import NavigationBar from './NavigationBar';
import { Colors } from '../Colors';

export default class Homescreen extends Component<{ navigation: any }> {
    render() {
        return (
        <View style={{ justifyContent:'center', height:'100%', alignItems:'center' }}>
            <RNCamera ref={ref => { this.camera = ref; }} style={{ width: '100%', height: '100%'}}/>
            
            <Icon size={30} name="add" reverse raised color={Colors.font_bg} containerStyle={{ position:'absolute', bottom:65,}} onPress={this.takePicture.bind(this)} />
                
            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }

    takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true, doNotSave: true};
          const data = await this.camera.takePictureAsync(options);
          this.props.navigation.navigate('Edit',  { photo: data.base64 })
        }
    };
}