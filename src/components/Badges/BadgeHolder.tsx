/*
Group Number: 8
Group Name: KickChek
Course: CIS4030
Assignment: Final Project
Date: April 7, 2020
*/

import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { getData, storeData } from '../../AsyncStorage'
import BadgeComponent from './BadgeComponent';
import { Colors } from '../../Colors';

export default class BadgeHolder extends Component<{ numShoes: number }> {

    //render the components to the screen
    render() {
        return (
            <View style={{ alignSelf:'stretch', alignItems:'stretch', margin:5}}>
                <Text style={{ fontSize:18, alignSelf:'center', color:Colors.font_bg }}>Badges</Text>
                
                <View style={{ flexWrap:'wrap', alignContent:'stretch', height:'75%'}}>
                    <BadgeComponent name="Shoe-b" desc="Collected your first shoe" collected={this.props.numShoes > 0}></BadgeComponent>
                    <BadgeComponent name="Grower" desc="Your wishlist is expanding" collected={this.props.numShoes >= 5}></BadgeComponent>
                    <BadgeComponent name="Dix" desc="10 is a good start, you always remember your first 10." collected={this.props.numShoes >= 10}></BadgeComponent>
                    <BadgeComponent name="Quarter" desc="Its all downhill after 25." collected={this.props.numShoes >= 25}></BadgeComponent>
                    <BadgeComponent name="Fifty" desc="The big 5-0. We'll mail you a cheesy shirt" collected={this.props.numShoes >= 50}></BadgeComponent>
                    <BadgeComponent name="Grower" desc="Your wishlist is expanding" collected={this.props.numShoes >= 75}></BadgeComponent>
                    <BadgeComponent name="Centurion" desc="You have viewed more shoes than years you will likely live! Congrats." collected={this.props.numShoes >= 100}></BadgeComponent>
                    <BadgeComponent name="Addict" desc="Stop staring and buy a pair" collected={this.props.numShoes >= 500}></BadgeComponent>
                </View>
            </View>
        )
    }
}