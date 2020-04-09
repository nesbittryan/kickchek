/*
Group Number: 8
Group Name: KickChek
Course: CIS4030
Assignment: Final Project
Date: April 7, 2020
*/

import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import WishlistScreen from './components/WishlistScreen';
import EditPhotoScreen from './components/EditPhotoScreen';
import { Colors } from './Colors'
import { ThemeProvider } from 'react-native-elements';
import ShoeDisplayScreen from './components/ShoeDisplayScreen';

//define the color theme of the app
const theme =  {
  colors: {
    primary: Colors.primary_fg,
    secondary: Colors.accent_fg,
  }
}

export default class App extends React.Component {

    //render the components to the screen
    render() {
    console.disableYellowBox = true;
    return(
      <ThemeProvider theme={theme}>
        <AppContainer></AppContainer>
      </ThemeProvider>
    );
  }
}

//define navigator to switch screens for the camera 
const PhotoNavigator = createSwitchNavigator(
  {
    Camera: {
      screen: HomeScreen
    },
    Edit: {
      screen: EditPhotoScreen
    }
  },
  {
    initialRouteName: 'Camera'
  }
)

//define main navigator to switch screens for the app
const AppNavigator = createSwitchNavigator({
    Home: PhotoNavigator,
    Profile: {
      screen: ProfileScreen
    },
    Wishlist: {
      screen: WishlistScreen
    },
    ShoeFound: {
      screen: ShoeDisplayScreen
    }
});
  
const AppContainer = createAppContainer(AppNavigator);
