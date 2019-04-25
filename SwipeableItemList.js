import React from 'react';
import { ListView, FlatList } from 'react-native';
import {List, ListItem, Text} from 'native-base';

import {DummyImages} from './DummyImages';
import SwipeableItem from './SwipeableItem';

export default class SwipeableItemList extends React.Component {
    render() {
        const items = [{key: '0', name: 'Green apple', store: 'HEB', price: '5.67', uri: DummyImages.greenApple}, 
            {key: '1', name: 'Fuji apple', store: 'Walmart', price: '4.54', uri: DummyImages.fujiApple}, 
            {key: '2', name: 'Red delicious apple', store: 'HEB', price: '7.92', uri: DummyImages.redApple},
            {key: '3', name: 'Red delicious apple', store: 'Walmart', price: '3.24', uri: DummyImages.redApple2}];
        return (
            <FlatList
                leftOpenValue={50}
                rightOpenValue={-50}
                data={items}
                renderItem = {data => <SwipeableItem item={data}/>} />
        );
    }
}