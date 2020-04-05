import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { getData, storeData } from '../AsyncStorage'
import Shoe from '../data/Shoe';
import NavigationBar from './NavigationBar';
import ShoeRow from './ShoeRow';
import { wishlist_key, shoes_collected_key } from '../data/StorageKeys';

interface State {
    numShoes: number
    wishlist: Shoe[]
}

export default class WishlistScreen extends Component<{ navigation: any }> {
 
    readonly state: State = {
        numShoes: 0,
        wishlist: new Array()
    }

    constructor(props: any) {
        super(props)
        let i = new Array
        let s = new Shoe
        s.brand = "Nike"
        s.colors = ['red',  'white', 'black']
        s.model = "Aventadors"
        i.push(s)
        storeData(wishlist_key, JSON.stringify(i))
        this.fetchData = this.fetchData.bind(this)
    }

    componentDidMount() {
        this.fetchData();
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
        <View style={{ justifyContent:'flex-start', height:'100%', alignItems:'stretch' }}>
            <Text style={{fontSize:28, alignSelf:'center'}}>Wishlist</Text>
            <View style={{ alignSelf:'center', backgroundColor:'#EFEFEF', borderColor:'#000', borderWidth:1, height:'87%', width:'95%'}}>
                <FlatList 
                    style={{margin:5}}
                    onRefresh={ () => this.fetchData() }
                    refreshing={ false }
                    data={this.state.wishlist}
                    renderItem={({item}) =>
                        <ShoeRow shoe={item}></ShoeRow>
                    }
                />
            </View>
            <NavigationBar navigation={this.props.navigation} screen='Wishlist'/>
        </View>
        )
    }
}