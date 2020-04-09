import React, { Component } from 'react';
import { View, FlatList, Share } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { getData, storeData } from '../AsyncStorage'
import Shoe from '../data/Shoe';
import NavigationBar from './NavigationBar';
import ShoeRow from './ShoeRow';
import { wishlist_key, shoes_collected_key, profile_key } from '../data/StorageKeys';
import { Colors } from '../Colors';

interface State {
    numShoes: number
    wishlist: Shoe[]
    refreshing: any
}

export default class WishlistScreen extends Component<{ navigation: any }> {
 
    readonly state: State = {
        numShoes: 0,
        wishlist: new Array(),
        refreshing: false
    }

    constructor(props: any) {
        super(props)
        this.fetchData = this.fetchData.bind(this)
        this.refreshList = this.refreshList.bind(this)
    }

    componentDidMount() {
        this.fetchData();
    }

    refreshList() {
        this.setState ({ refreshing: !this.state.refreshing })
        getData(wishlist_key)
        .then((data: any) => {
            if (data != null) {
                let l = JSON.parse(data)
                this.setState({ wishlist: l, numShoes: l.length})
                storeData(shoes_collected_key, JSON.stringify(l.length))
            }
        })
        console.log("refreshed from wishlist")
    }

    fetchData() {
        getData(wishlist_key)
        .then((data: any) => {
            if (data != null) {
                let l = JSON.parse(data)
                this.setState({ wishlist: l, numShoes: l.length})
                storeData(shoes_collected_key, JSON.stringify(l.length))
            }
        })
    }

    render() {
        return (
        <View style={{ justifyContent:'flex-start', height:'100%', alignItems:'stretch', backgroundColor:Colors.primary_bg }}>
            <Text style={{padding:10,fontSize:30, alignSelf:'center', color:Colors.font_bg}}>Wishlist</Text>
            
            <FlatList 
                style={{padding:5}}
                // onRefresh={ () => this.fetchData() }
                // refreshing={ false }
                data={this.state.wishlist}
                extraData={this.state}
                renderItem={({item, index}) =>
                    <ShoeRow shoe={item} index={index} refreshList={this.refreshList}></ShoeRow>
                }
            />

            <NavigationBar navigation={this.props.navigation} screen='Wishlist'/>
        </View>
        )
    }
}