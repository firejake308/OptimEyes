import React from 'react';
import { Text, Image } from 'react-native';
import { Container, Content, List, ListItem } from "native-base";

export default class NavDrawer extends React.Component {
    render() {
        const routes = ['help', 'me', 'please'];
        return (
            <Container>
                <Content>
                    <Image
                        source={{
                            uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png"
                        }}
                        style={{
                            height: 120,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }} />
                    <List
                        dataArray={routes}
                        renderRow={data => {
                        return (
                            <ListItem
                            button
                            onPress={() => this.props.navigation.navigate(data)}>
                            <Text>{data}</Text>
                            </ListItem>
                        );
                        }}
                    />
                </Content>
            </Container>
        );
    }
}