import React, { Component } from 'react';
import { View, Linking } from 'react-native';
import { Button, Text, Image } from 'react-native-elements';
import Shoe from '../data/Shoe';
import { Colors } from '../Colors';

export default class ShoeRow extends Component<{ shoe: Shoe, index:number }> {

    render() {
        let fontColor = (this.props.index % 2 == 0) ? "#000" : "#FFF";
        let bgColor = (this.props.index % 2 == 0) ? Colors.accent_bg : Colors.font_bg;
        return (
        <View style={{ width:'100%', flexDirection:'row', backgroundColor: bgColor}}>  
            <Image source={{uri:this.props.shoe.image}} containerStyle={{ margin:10,height:80, width:80}}/>
            <View>
                <Text style={{fontSize:24, color:fontColor}}>{this.props.shoe.model}</Text>
                <Text style={{fontSize:18, color:fontColor}}>{this.props.shoe.brand}</Text>
            </View> 
            <Button containerStyle={{margin:5, alignSelf:'flex-end', justifyContent:'flex-end'}} title="Buy Here" onPress={() => Linking.openURL(this.props.shoe.url)}></Button>
        </View>
        )
    }
}