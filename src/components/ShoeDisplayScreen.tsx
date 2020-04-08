import React, { Component } from 'react';
import { View } from 'react-native';
import NavigationBar from './NavigationBar';
import { Text, Button, Image } from 'react-native-elements';
import { nike } from '../data/SampleShoeObjects';
import { Linking } from 'react-native';
import { Colors } from '../Colors';
import { wishlist_key, shoes_collected_key, profile_key } from '../data/StorageKeys';
import { getData, storeData } from '../AsyncStorage';
import { Share } from 'react-native';

export default class ShoeDisplayScreen extends Component<{navigation: any }> {

    readonly state = {
        shoe: this.props.navigation.state.params.shoe
    }

    constructor(props: any) {
        super(props)
    }

    shareShoe() {
        let profile_data
        getData(profile_key).then((data: any) => {
            if (data != null) {
                profile_data = JSON.parse(data)
            }
        })
        var share_message = 'Help! If you or someone you know is looking to sell a pair of ' + this.state.shoe.brand + ' ' + this.state.shoe.model + '\'s in size ' + profile_data.shoeSize + ' please let me know! Shoes found via KickChek'
        Share.share({
            message: share_message,
            title:  'Looking for Shoes'
        })
    }

    addToWishlist() {
        getData(wishlist_key)
        .then((data: any) => {
            if (data != null) {
                let l = JSON.parse(data)
                l.push(this.state.shoe)
                storeData(wishlist_key, JSON.stringify(l))
            } else {    
                let l = new Array
                l.push(this.state.shoe)
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
            <Text style={{fontSize:20, alignSelf:'center'}}>Brand: { this.state.shoe.brand }</Text>
            <Text style={{fontSize:20, alignSelf:'center'}}>Model: { this.state.shoe.model }</Text>
            <Image source={{uri:this.state.shoe.image}} containerStyle={{height:'40%'}}/>
            <Button containerStyle={{margin:5}} raised type="outline"
                title="Buy Online"
                onPress={() => Linking.openURL(this.state.shoe.url)}/>
            <Button containerStyle={{margin:5}} raised
                title="Add to wishlist"
                onPress={() => this.addToWishlist() }/>
            <Button containerStyle={{margin:5}} raised type="outline"
                title="Share"
                onPress={() => this.shareShoe()}/>
            <NavigationBar navigation={this.props.navigation} screen='Home'/>
        </View>
        )
    }
}