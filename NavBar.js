import React from 'react';
import { Constants } from 'expo';
import { Header, Button, Icon, Left, Body, Title, Right } from 'native-base';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    return (
      <Header style={{marginTop: Constants.statusBarHeight}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}><Icon name='menu'/></Button>
        </Left>
        <Body>
          <Title>OptimEyes</Title>
        </Body>
        <Right>
          <Button transparent><Icon name="search" /></Button>
        </Right>
      </Header>
    );
  }
}