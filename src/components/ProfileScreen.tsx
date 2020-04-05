import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text, Input } from 'react-native-elements';
import { getData, storeData } from '../AsyncStorage'
import NavigationBar from './NavigationBar';
import ProfileData from '../data/ProfileData';
import { profile_key, shoes_collected_key } from '../data/StorageKeys';
import BadgeHolder from './Badges/BadgeHolder';

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
        <View style={{ justifyContent:'flex-start', height:'100%' }}>
            <Text style={{fontSize:28, alignSelf:'center'}}>Profile</Text>
            <View style={{ alignSelf:'center', backgroundColor:'#EFEFEF' ,borderColor:'#000', borderWidth:1, height:'87%', width:'95%'}}>
                <Input value={this.state.address} label="Address" onChangeText={ (t) => this.setState({address: t})}></Input>
                <Input value={this.state.name} label="Name" onChangeText={ (t) => this.setState({name: t})}></Input>
                <Input value={this.state.shoeSize} label="ShoeSize" onChangeText={ (t) => this.setState({shoeSize: t})}></Input>
                <Button containerStyle={{marginTop:20, marginHorizontal:7}} title="Save Profile Info" onPress={() => this.saveProfile()}></Button>

                <BadgeHolder numShoes={this.state.numShoes}></BadgeHolder>
            </View>
            <NavigationBar navigation={this.props.navigation} screen='Profile'/>
        </View>
        )
    }
}