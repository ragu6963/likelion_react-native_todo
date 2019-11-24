import React, { Component } from 'react'
import { CheckBox, ListItem, Text, Left, Body, Right } from 'native-base'
import { View } from 'native-base'
export default class Note extends Component {
    render() {
        return (
            <View>
                <ListItem icon>
                    <Left>
                        <CheckBox />
                    </Left>
                    <Body>
                        <Text>{this.props.note}</Text>
                    </Body>
                    <Right>
                        <Text>
                            ✏
                        </Text>
                    </Right>
                    <Right>
                        <Text>
                            ❌
                        </Text>
                    </Right>
                </ListItem>
                {/* <Text>  </Text> */}
            </View>
        )
    }
}
