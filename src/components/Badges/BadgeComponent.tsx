import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';

export default class BadgeComponent extends Component<{ collected: boolean, desc:string, name: string }> {

    render() {
        let color = (this.props.collected) ? '#35C845' : '#99968E'
        return (
            <View style={{ backgroundColor:'#15517F', margin:5, alignSelf:'center', alignItems:'center', maxWidth:100, borderColor:color, borderWidth:3, borderRadius:20 }}>
                <Text style={{fontSize:15, color:'#FFF', alignSelf:'center'}}>{this.props.name}</Text>
                <Text style={{fontSize:12, flexWrap:'wrap', alignSelf:'center', color:'#91C5EE', padding:10}}>{this.props.desc}</Text>
            </View>
        )
    }
}