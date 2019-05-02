import React from 'react';
import { ListView, FlatList } from 'react-native';
import {List, ListItem, Text} from 'native-base';

import {DummyImages} from './DummyImages';
import SwipeableItem from './SwipeableItem';

export default class SwipeableItemList extends React.Component {

    constructor(props) {
        super(props);

        this.ITEMS = [{id: '0', name: 'Green apple', store: 'HEB', price: '5.67', uri: DummyImages.greenApple}, 
            {id: '1', name: 'Fuji apple', store: 'Walmart', price: '4.54', uri: DummyImages.fujiApple}, 
            {id: '2', name: 'Red delicious apple', store: 'HEB', price: '7.92', uri: DummyImages.redApple},
            {id: '3', name: 'Red delicious apple', store: 'Walmart', price: '3.24', uri: DummyImages.redApple2}];

        const initSelected = {};
        for (let item of this.ITEMS) {
            initSelected[item.id] = false;
        }

        this.state = {
            selected: initSelected
        }
    }

    onItemSelected = (item) => {
        //console.log(item);
        let o = Object.assign({}, this.state.selected);
        o[item.id] = !o[item.id];
        this.setState({selected: o});
        console.log(this.state.selected);
    }


    render() {
        return (
            <FlatList
                data={this.ITEMS}
                keyExtractor={(item) => item.id}
                extraData={this.state.selected}
                renderItem = {data => 
                    <SwipeableItem 
                        item={data.item} 
                        onSelected={this.onItemSelected.bind(this, data.item)}
                        selected={this.state.selected[data.item.id]} />
                } />
        );
    }
}