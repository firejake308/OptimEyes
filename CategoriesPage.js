import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Font, AppLoading, Constants } from 'expo';
import {Ionicons} from '@expo/vector-icons';
import { Root, Content, Fab, Icon, Container} from 'native-base';
import NavBar from './NavBar';
import CardGrid from './CardGrid';

export default class CategoriesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFabActive: false
        }
    }
    render() {
        return (
            <Root>
              <NavBar navigation={this.props.navigation}/>
              <CardGrid />
              <Fab
                  active={this.state.isFabActive}
                  direction="up"
                  position="bottomRight"
                  onPress={() => {
                      this.setState({isFabActive: !this.state.isFabActive});
                      this.props.navigation.navigate('ItemList');
                    }}>
                  <Icon name="add" />  
                </Fab>
            </Root>
          );
    }
}