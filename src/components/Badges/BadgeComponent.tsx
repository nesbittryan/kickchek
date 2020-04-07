import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Colors } from '../../Colors';

export default class BadgeComponent extends Component<{ collected: boolean, desc:string, name: string }> {

    render() {
        let color = (this.props.collected) ? Colors.accent_fg : Colors.primary_fg
        return (
            <View style={{ backgroundColor: Colors.primary_bg, margin:5, alignSelf:'center', alignItems:'center', maxWidth:100, borderColor:color, borderWidth:3, borderRadius:20 }}>
                <Text style={{fontSize:14, color:Colors.font_bg, alignSelf:'center'}}>{this.props.name}</Text>
                <Text style={{fontSize:11, flexWrap:'wrap', alignSelf:'center', color:Colors.font_fg, padding:10}}>{this.props.desc}</Text>
            </View>
        )
    }
}