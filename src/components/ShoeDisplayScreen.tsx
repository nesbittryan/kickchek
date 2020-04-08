import React, { Component } from 'react';
import { View } from 'react-native';
import NavigationBar from './NavigationBar';
import { Text, Button, Image } from 'react-native-elements';
import { nike } from '../data/SampleShoeObjects';
import { Linking } from 'react-native';
import { Colors } from '../Colors';
import { wishlist_key, shoes_collected_key } from '../data/StorageKeys';
import { getData, storeData } from '../AsyncStorage'

export default class ShoeDisplayScreen extends Component<{ navigation: any }> {

    constructor(props: any) {
        super(props)
    }

    addToWishlist() {
        getData(wishlist_key)
        .then((data: any) => {
            if (data != null) {
                let l = JSON.parse(data)
                l.push(nike)
                storeData(wishlist_key, JSON.stringify(l))
            }
        })
        
        getData(shoes_collected_key)
        .then((data: any) => {
            if (data != null) {
                let d = JSON.parse(data)
                storeData(shoes_collected_key, JSON.stringify(d+1))
            }
        })
    }
    
    render() {
        return (
        <View style={{ justifyContent:'flex-start', height:'100%', alignItems:'stretch', backgroundColor:Colors.primary_bg }}>
            <Text style={{ padding:10, fontSize:30, alignSelf:'center', color:Colors.font_bg}}>Your Shoe</Text>
            
            <Text style={{fontSize:20, alignSelf:'center'}}>We found your shoe!</Text>
            <Text style={{fontSize:20, alignSelf:'center'}}>Brand: { nike.brand }</Text>
            <Text style={{fontSize:20, alignSelf:'center'}}>Model: { nike.model }</Text>
            <Image source={{uri:nike.image}} containerStyle={{height:'40%'}}/>
            <Button containerStyle={{margin:5}} raised type="outline"
                title="Buy Online"
                onPress={() => Linking.openURL(nike.url)}/>
            <Button containerStyle={{margin:5}} raised
                title="Add to wishlist"
                onPress={() => this.addToWishlist() }/>

            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }
}