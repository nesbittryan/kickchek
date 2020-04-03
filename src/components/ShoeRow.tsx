import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Shoe from '../data/Shoe';

export default class ShoeRow extends Component<{ shoe: Shoe }> {

    render() {
        return (
        <View style={{ width:'100%', flexDirection:'row' }}>     
            <Text>Model: {this.props.shoe.model}</Text>
            <Text> Brand: {this.props.shoe.brand}</Text>
        </View>
        )
    }
}