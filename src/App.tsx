import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import WishlistScreen from './components/WishlistScreen';
import EditPhotoScreen from './components/EditPhotoScreen';
import { Colors } from './Colors'

import { ThemeProvider } from 'react-native-elements';

const theme =  {
  colors: {
    primary: Colors.primary_fg,
    secondary: Colors.accent_fg,
  }
}
import ShoeDisplayScreen from './components/ShoeDisplayScreen';

export default class App extends React.Component {

  render() {
    return(
      <ThemeProvider theme={theme}>
        <AppContainer></AppContainer>
      </ThemeProvider>
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
    },
    ShoeFound: {
      screen: ShoeDisplayScreen
    }
});
  
const AppContainer = createAppContainer(AppNavigator);
