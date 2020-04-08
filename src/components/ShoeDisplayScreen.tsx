import React, { Component } from 'react';
import { View, Image } from 'react-native';
import NavigationBar from './NavigationBar';
import { Text, Icon } from 'react-native-elements';
import { shoe_1, shoe_2 } from '../data/SampleShoeObjects';
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
            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }
}