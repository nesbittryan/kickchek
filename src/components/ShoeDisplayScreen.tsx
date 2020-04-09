/*
Group Number: 8
Group Name: KickChek
Course: CIS4030
Assignment: Final Project
Date: April 7, 2020
*/

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

    /* set state to include the shoe that has been matched and set 
    the user's shoe size to unknown until it is set in shareShoe() */
    readonly state = {
        shoe: this.props.navigation.state.params.shoe,
        shoeSize: "unknown"
    }

    constructor(props: any) {
        super(props)
    }

    //use built-in share functionality to share message
    shareShoe() {
        let profile_data
        //access shoe size from the user's profile
        getData(profile_key).then((data: any) => {
            if (data != null) {
                profile_data = JSON.parse(data)
                this.setState({shoeSize: profile_data.shoeSize})
                //if profile data is not null, create a message including the shoe model and brand as well as size.
                let share_message = 'Help! If you or someone you know is looking to sell a pair of ' + this.state.shoe.brand + ' ' + this.state.shoe.model + '\'s in size ' + this.state.shoeSize + ' please let me know! Shoes found via KickChek'
            //share the message
            Share.share({
                message: share_message,
                title:  'Looking for Shoes'
            })
            }
        })        
    }

    //add the shoe to the user's wishlist, storing it in async storage
    addToWishlist() {
        //access the user's wishlist
        getData(wishlist_key)
        .then((data: any) => {
            //if there is an existing wishlist, add the new shoe to the top of the list 
            //  and save the array back to async storage
            if (data != null) {
                let l = JSON.parse(data)
                l.push(this.state.shoe)
                storeData(wishlist_key, JSON.stringify(l))
            //if there is not an existing wishlist, create an empty list, add the new 
            //  shoe to the top of the list and save the array to async storage
            } else {    
                let l = new Array
                l.push(this.state.shoe)
                storeData(wishlist_key, JSON.stringify(l))
            }
        })
        
        //access the user's number of collected shoes
        getData(shoes_collected_key)
        .then((data: any) => {
            //if the data is not null, add one to the number of shoes found and save to async storage
            if (data != null) {
                let d = JSON.parse(data)
                storeData(shoes_collected_key, JSON.stringify(d+1))
            }
        })
    }
            
    //render the components to the screen
    render() {
        return (
        <View style={{ justifyContent:'flex-start', height:'100%', alignItems:'stretch', backgroundColor:Colors.primary_bg }}>
            <Text style={{ padding:10, fontSize:30, alignSelf:'center', color:Colors.font_bg}}>Match Found</Text>
            <Text style={{color:Colors.white, fontSize:20, alignSelf:'center'}}>We found your shoe!</Text>
            <Text style={{color:Colors.white, fontSize:20, alignSelf:'center'}}>Match Confidence: 89%</Text>
            <Text style={{color:Colors.white, fontSize:20, alignSelf:'center'}}>Brand: { this.state.shoe.brand }</Text>
            <Text style={{color:Colors.white, fontSize:20, alignSelf:'center'}}>Model: { this.state.shoe.model }{"\n"}</Text>
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