import React, { Component } from 'react';
import { View, Image } from 'react-native';
import NavigationBar from './NavigationBar';
import { Text, Icon } from 'react-native-elements';
import { shoe_1 } from '../data/SampleShoeObjects';
import { Linking } from 'react-native';
import { Button } from 'react-native-elements';

interface State {
    photo: string
}

export default class ShoeDisplayScreen extends Component<{ navigation: any }> {

    constructor(props: any) {
        super(props)
    }
    
    render() {
        return (
        <View style={{ justifyContent:'flex-start', height:'100%' }}>
            <Text style={{fontSize:20, alignSelf:'center'}}>We found your shoe!</Text>
            <Text style={{fontSize:20, alignSelf:'center'}}>Brand: { shoe_1.brand }</Text>
            <Text style={{fontSize:20, alignSelf:'center'}}>Model: { shoe_1.model }</Text>
            <Text style={{fontSize:20, alignSelf:'center', color: 'blue'}}
                onPress={() => Linking.openURL(shoe_1.url)}>
            Buy
            </Text>
            
            {/* <Button
                    containerStyle={{ width:'40%'}}
                    title="Add to wishlist"
                    onPress={() => }/> */}
            <Image source={shoe_1.image} resizeMode="contain" style={{alignSelf: 'stretch', flex:1, height: undefined, width: undefined}} />

            {/* <Image source={{ uri: `data:image/jpeg;base64,${this.props.navigation.state.params.photo}` }} style={{width:'90%', height:'87%', alignSelf:'center'}}></Image>

            <Icon name='forward' color='#76E76B' raised containerStyle={{ position:'absolute', bottom:70, right:10}}
                onPress={() => this.identifyShoes()}></Icon>
            
            <Icon name='close' color='#AD3939' raised containerStyle={{ position:'absolute', bottom:70, left:10}}
                onPress={() => this.props.navigation.navigate("Camera")}></Icon> */}

            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }
}