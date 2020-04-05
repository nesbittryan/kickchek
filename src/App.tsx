import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import WishlistScreen from './components/WishlistScreen';
import EditPhotoScreen from './components/EditPhotoScreen';

export default class App extends React.Component {

  render() {
    return(
      <AppContainer></AppContainer>
    );
  }
}

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


const AppNavigator = createSwitchNavigator({
    Home: PhotoNavigator,
    Profile: {
      screen: ProfileScreen
    },
    Wishlist: {
      screen: WishlistScreen
    }
});
  
const AppContainer = createAppContainer(AppNavigator);
