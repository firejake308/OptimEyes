import React from 'react';
import { View, Image, Text, StyleSheet, Platform, TouchableNativeFeedback, TouchableHighlight } from 'react-native';

export default class SwipeableItem extends React.Component {
    onTouchEnd(evt) {
        console.log('end: '+evt.nativeEvent.timestamp);
    }

    render() {
        const item = this.props.item.item;
        const pic = "https://img1.cookinglight.timeinc.net/sites/default/files/1502826406/1708w-getty-fruit-closeup-CarstenSchanter-EyeEm.jpg";
        const renderElement = (
            <View style={styles.mainContainer}>
                <Image source={item.uri} style={styles.thumbnail}/>
                <View style={styles.bodyContainer}>
                    <View style={{flexGrow: 1}}>
                        <Text>{item.name}</Text>
                        <Text style={styles.subtitle}>{item.store}</Text>
                    </View>
                    <Text style={styles.priceDisplay}>${item.price}</Text>
                </View>
            </View>
        );
        if (Platform.OS === 'android')
            return (
                <TouchableNativeFeedback
                    onLongPress={this.onTouchEnd}>
                    {renderElement}
                </TouchableNativeFeedback>);
        else
            return <TouchableHighlight onLongPress={this.onTouchEnd}>{renderElement}</TouchableHighlight>;
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        height: 72
    },
    bodyContainer: {
        marginTop: 16,
        flexGrow: 1,
        flexDirection: 'row',
        height: 72
    },
    thumbnail: {
        height: 40, 
        width: 40, 
        flex: 0,
        margin: 16,
        borderRadius: 2
    },
    priceDisplay: {
        marginTop: 8, //16 px are accounted for in the bodyContainer margin
        marginBottom: 24, // may not work as intended, but it looks fine for now
        marginRight: 16
    },
    subtitle: {
        color: 'rgba(0, 0, 0, 0.6)'
    }
})