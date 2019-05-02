import React from 'react';
import { Text, View, FlatList, ListView } from 'react-native';
import { Content } from 'native-base';

import SwipeableItemList from './SwipeableItemList';
import NavBar from './NavBar';

export default class ItemListPage extends React.Component {
    render() {
        return (
            <Content style={{backgroundColor: '#eceff1'}}>
                <View>
                    <Text>This is a placeholder for the tag stream</Text>
                </View>
                <SwipeableItemList />
            </Content>
        );
    }
}