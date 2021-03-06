import React from 'react';
import { Constants } from 'expo';
import { Header, Button, Icon, Left, Body, Title, Right } from 'native-base';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
    const routes = this.props.navigation.state.routes;
    const currRoute = routes[routes.length - 1].routeName;
    function menuOrBack() {
      if (currRoute === 'Categories')
        return 'menu';
      else if (currRoute === 'ItemList')
        return 'arrow-back';
    };
    const dynamicCallback = () => {
      // TODO add a drawer navigator or somethin
      //if (currRoute === 'Categories')
      //  this.props.navigation.openDrawer();
      if (currRoute === 'ItemList')
        this.props.navigation.goBack();
    };
    return (
      <Header style={{marginTop: Constants.statusBarHeight, backgroundColor: '#cfd8dc'}}>
        <Left>
          <Button transparent onPress={() => this.props.navigation.pop()}><Icon name={menuOrBack()} style={{color: 'black'}}/></Button>
        </Left>
        <Body>
          <Title style={{color: 'black'}}>OptimEyes</Title>
        </Body>
        <Right>
          <Button transparent><Icon name="search" style={{color: 'black'}}/></Button>
        </Right>
      </Header>
    );
  }
}