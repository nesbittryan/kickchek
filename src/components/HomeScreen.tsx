import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { RNCamera } from 'react-native-camera';

export default class Homescreen extends Component {
    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <RNCamera 
                ref={ref => { this.camera = ref; }}
                style={{
                    flex: 1,
                    width: '100%',
                }}/>
            <Text>Home Screen</Text>
            <Button
                title="Go to About"
                onPress={() => this.props.navigation.navigate('Wishlist')}/>
            <Button 
                title="SNAP Picture"
                onPress={this.takePicture.bind(this)}/>
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