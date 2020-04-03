import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';
import NavigationBar from './NavigationBar';

export default class Homescreen extends Component<{ navigation: any }> {
    render() {
        return (
        <View style={{ justifyContent:'flex-start', height:'100%' }}>
            <RNCamera 
                ref={ref => { this.camera = ref; }}
                style={{
                    width: '100%',
                    height: '85%'
                }}/>
    
            <Button 
                title='Take Picture'
                onPress={this.takePicture.bind(this)}/>
            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }

    takePicture = async() => {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options);
          console.log(data.uri);
        }
    };
}