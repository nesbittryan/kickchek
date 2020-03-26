import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { getData, storeData } from '../AsyncStorage'
import Shoe from '../data/Shoe';

interface State {
    wishlist: Shoe[]
}

const wishlist_key: string = "wishlist"

export default class WishlistScreen extends Component {
 
    readonly state: State = {
        wishlist: new Array()
    }

    constructor(props: any) {
        super(props)
        let i = new Array
        let s = new Shoe
        s.name = "Nike Aventadors"
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
                this.setState({ wishlist: JSON.parse(data) })
            }
        })
    }

    render() {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Wishlist Screen</Text>
            <Button
                title="Snap A Pic!"
                onPress={() => this.props.navigation.navigate('Home')}/>
            
            <FlatList 
                onRefresh={ () => this.fetchData() }
                refreshing={ false }
                data={this.state.wishlist}
                renderItem={({item}) =>
                    <Text>{item.name}</Text>
                }/>
        </View>
        )
    }
}