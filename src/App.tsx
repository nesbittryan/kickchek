import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import WishlistScreen from './components/WishlistScreen';

export default class App extends React.Component {

  render() {
    return(
      <AppContainer></AppContainer>
    );
  }
}


const AppNavigator = createSwitchNavigator({
    Home: {
      screen: HomeScreen
    },
    Profile: {
      screen: ProfileScreen
    },
    Wishlist: {
      screen: WishlistScreen
    }
});
  
const AppContainer = createAppContainer(AppNavigator);
