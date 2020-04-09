/*
Group Number: 8
Group Name: KickChek
Course: CIS4030
Assignment: Final Project
Date: April 7, 2020
*/

import React, { Component } from 'react';
import { View, Linking, Share } from 'react-native';
import { Button, Text, Image } from 'react-native-elements';
import Shoe from '../data/Shoe';
import { Colors } from '../Colors';
import { wishlist_key, shoes_collected_key, profile_key } from '../data/StorageKeys';
import { getData, storeData } from '../AsyncStorage';

export default class ShoeRow extends Component<{ shoe: Shoe, index:number,  refreshList: any}> {

    //set state to inclide user's shoe size, to be updated later by shareShoe()
    readonly state = {
        shoeSize: "unknown",
    }

    constructor(props: any) {
        super(props)
        this.removeShoe = this.removeShoe.bind(this)
    }

    //when the remove button is clicked, remove that item from the wishlist
    removeShoe() {
        //access the user's wishlist data
        getData(wishlist_key)
        .then((data: any) => {
            if (data != null) {
                /* if the user's wishlist is not empty, remove the item at current index, save then
                updated wishlist to async storage and refresh the flatlist displayed in the 
                WishlistScreen using the refreshList() function passed down as a prop */
                let l = JSON.parse(data)
                l.splice(this.props.index,1)
                storeData(wishlist_key, JSON.stringify(l))
                this.props.refreshList()
                console.log("refreshed from list item")
            }
        })
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
                let share_message = 'Help! If you or someone you know is looking to sell a pair of ' + this.props.shoe.brand + ' ' + this.props.shoe.model + '\'s in size ' + this.state.shoeSize + ' please let me know! Shoes found via KickChek'
            //share the message
            Share.share({
                message: share_message,
                title:  'Looking for Shoes'
            })
            }
        })        
    }

    //render the components to the screen
    render() {
        let fontColor = (this.props.index % 2 == 0) ? "#000" : "#FFF";
        let bgColor = (this.props.index % 2 == 0) ? Colors.accent_bg : Colors.font_bg;
        return (
        <View style={{ width:'100%',  backgroundColor: bgColor}}>  
            <View style={{ width:'100%', flexDirection:'row', backgroundColor: bgColor}}>  
                <Image source={{uri:this.props.shoe.image}} containerStyle={{ margin:10,height:120, width:120}}/>
                <View>
                    <Text style={{fontSize:28, color:fontColor}}>{this.props.shoe.model}</Text>
                    <Text style={{fontSize:18, color:fontColor}}>{this.props.shoe.brand}</Text>
                    <Text style={{fontSize:18, color:fontColor}}>{this.props.shoe.colors}</Text>
                    <View style={{ width:'100%',  alignSelf:'center', flexDirection:'row', backgroundColor: bgColor}}>  
                        <Button containerStyle={{margin:5, marginLeft: 0, alignSelf:'flex-end', justifyContent:'flex-end'}} title="Buy Here" onPress={() => Linking.openURL(this.props.shoe.url)}></Button>
                        <Button containerStyle={{margin:5, alignSelf:'flex-end', justifyContent:'flex-end'}} title="Share" onPress={() => this.shareShoe()}></Button>
                        <Button containerStyle={{margin:5, alignSelf:'flex-end', justifyContent:'flex-end'}} title="Remove" onPress={() => this.removeShoe()}></Button>
                    </View>
                </View> 
            </View>
            
        </View>
        )
    }
}