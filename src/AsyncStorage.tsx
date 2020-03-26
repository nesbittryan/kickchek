import AsyncStorage from '@react-native-community/async-storage'

export async function storeData(key: string, item: any) {
    try {
        await AsyncStorage.setItem(key, item);
    } catch (e) {
        console.log(e)
    }
}

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