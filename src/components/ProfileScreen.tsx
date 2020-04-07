import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Input, Icon } from 'react-native-elements';
import { getData, storeData } from '../AsyncStorage'
import NavigationBar from './NavigationBar';
import ProfileData from '../data/ProfileData';
import { profile_key, shoes_collected_key } from '../data/StorageKeys';
import BadgeHolder from './Badges/BadgeHolder';
import { Colors } from '../Colors';

interface State {
    address: string
    name: string
    numShoes: number
    shoeSize: string
}

export default class ProfileScreen extends Component<{ navigation: any }> {
    
    readonly state: State = {
        address: '',
        name: '',
        numShoes: 0,
        shoeSize: ''
    }

    constructor(props: any) {
        super(props)
        this.fetchData = this.fetchData.bind(this)
        this.saveProfile = this.saveProfile.bind(this)
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        getData(profile_key)
        .then((data: any) => {
            if (data != null) {
                let d = JSON.parse(data)
                this.setState({ name: d.name, address: d.address, shoeSize: d.shoeSize })
            }
        })

        getData(shoes_collected_key)
        .then((data: any) => {
            if (data != null) {
                let d = JSON.parse(data)
                this.setState({ numShoes: d })
            }
        })
    }

    saveProfile() {
        let prof = new ProfileData()
        prof.address = this.state.address
        prof.name = this.state.name
        prof.shoeSize = this.state.shoeSize
        
        storeData(profile_key, JSON.stringify(prof))
        this.fetchData()
    }
    
    render() {
        return (
            <View style={{ justifyContent:'flex-start', height:'100%', alignItems:'stretch', backgroundColor:Colors.primary_bg }}>
            <Text style={{padding:10,fontSize:30, alignSelf:'center', color:Colors.font_bg}}>Profile</Text>

            <View style={{ alignSelf:'stretch', backgroundColor: Colors.accent_bg, margin:5, maxHeight:'81%'}}>
                <Input value={this.state.address} label="Address" onChangeText={ (t) => this.setState({address: t})}></Input>
                <Input value={this.state.name} label="Name" onChangeText={ (t) => this.setState({name: t})}></Input>
                <Input value={this.state.shoeSize} label="Shoe Size" onChangeText={ (t) => this.setState({shoeSize: t})}></Input>
                <Icon size={30} name="save" reverse raised color={Colors.font_bg} containerStyle={{ position:'absolute', bottom:5, right:5}} onPress={() => this.saveProfile()} />
                <BadgeHolder numShoes={this.state.numShoes}></BadgeHolder>
            </View>

            <NavigationBar navigation={this.props.navigation} screen='Profile'/>
        </View>
        )
    }
}