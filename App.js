import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font, AppLoading, Constants } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import { Root, Content, Fab, Icon, Container, Drawer, List, ListItem, Image } from 'native-base';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';

import NavBar from './NavBar';
import CardGrid from './CardGrid';
import CategoriesPage from './CategoriesPage';
import ItemListPage from './ItemListPage';
import NavDrawer from './NavDrawer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    if (this.state.loading)
      return <AppLoading />

    // once fonts are loaded, set up navigation
    const AppNavigator = createDrawerNavigator({
      Categories: {
        screen: CategoriesPage
      },
      ItemList: {
        screen: ItemListPage
      }
    }, {
      initialRouteName: 'Categories',
      /*navigationOptions: {
        header: <NavBar />,
        headerStyle: {
          backgroundColor: 'transparent'
        }
      }*/
      contentComponent: props => <NavDrawer {...props} />
    });
    const AppContainer = createAppContainer(AppNavigator);

    return <AppContainer />;
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({loading: false})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
