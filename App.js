import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font, AppLoading, Constants } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import { Root, Content, Fab, Icon, Container} from 'native-base';
import NavBar from './NavBar';
import CardGrid from './CardGrid';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      isFabActive: false}
    ;
  }

  render() {
    if (this.state.loading)
      return <AppLoading />
    return (
      <Root>
        <NavBar />
        <CardGrid />
        <Fab
            active={this.state.isFabActive}
            direction="up"
            position="bottomRight"
            onPress={() => this.setState({isFabActive: !this.state.isFabActive})}>
            <Icon name="add" />  
          </Fab>
      </Root>
    );
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
