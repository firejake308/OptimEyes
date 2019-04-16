import React from 'react';
import { Image, Text, View, FlatList } from 'react-native';
import { Constants } from 'expo';
import { CardItem, Card, Container } from 'native-base';

export default class CardGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: '48%'
        }

        this.renderCard = this.renderCard.bind(this);
    }

    renderCard() {
        const pic = "https://img1.cookinglight.timeinc.net/sites/default/files/1502826406/1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg";
        return (
            <Card key={Math.random()} width={this.state.width}>
                <CardItem header style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text>hello from card</Text>
                </CardItem>
                <CardItem style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={{uri: pic}} style={{height: 100, width: 100, flex: 0}}/>
                </CardItem>
            </Card>
        );
    }

    render() {
        let cards = [];
        for (let i = 0; i < 15; i++) {
            cards.push(this.renderCard());
        }
        return (
            <FlatList
                style={{paddingLeft: 8}}
                onLayout={(evt) => this.setState({width: (evt.nativeEvent.layout.width-24)/2})}
                data={cards}
                renderItem={(item) => this.renderCard(item)}
                numColumns="2" >
            </FlatList>
        );
    }
}