import React, { Component } from 'react';
import { View, Image } from 'react-native';
import NavigationBar from './NavigationBar';
import { Text, Icon } from 'react-native-elements';

interface State {
    photo: string
}

export default class EditPhotoScreen extends Component<{ navigation: any }> {
    readonly state: State = {
        photo: this.props.navigation.state.params.photo
    }
    
    constructor(props: any) {
        super(props)
        this.identifyShoes = this.identifyShoes.bind(this)
    }

    identifyShoes() {
        // Add tensorflow here
        console.log('here')
    }
    
    render() {
        return (
        <View style={{ justifyContent:'flex-start', height:'100%' }}>
            <Text style={{fontSize:20, alignSelf:'center'}}>Your Masterpiece</Text>
            <Image source={{ uri: `data:image/jpeg;base64,${this.props.navigation.state.params.photo}` }} style={{width:'90%', height:'87%', alignSelf:'center'}}></Image>

            <Icon name='forward' color='#76E76B' raised containerStyle={{ position:'absolute', bottom:70, right:10}}
                onPress={() => this.identifyShoes()}></Icon>
            
            <Icon name='close' color='#AD3939' raised containerStyle={{ position:'absolute', bottom:70, left:10}}
                onPress={() => this.props.navigation.navigate("Camera")}></Icon>

            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }
}