/*
Group Number: 8
Group Name: KickChek
Course: CIS4030
Assignment: Final Project
Date: April 7, 2020
*/

import AsyncStorage from '@react-native-community/async-storage'

//store data to the appropriate async storage, determined by key
export async function storeData(key: string, item: any) {
    try {
        await AsyncStorage.setItem(key, item);
    } catch (e) {
        console.log(e)
    }
}

//access data from the appropriate async storage, determined by key
export async function getData(key: string) {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
    } catch (e) {
        console.log(e)
    }
}