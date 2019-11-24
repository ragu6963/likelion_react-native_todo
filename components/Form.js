import React, { Component } from 'react'
import { Container, Content, Item, Input, Label } from 'native-base'
export default class Form extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Item inlineLabel>
                        <Input
                            placeholder="please note input..."
                        />
                    </Item>
                </Content>
            </Container>
        )
    }
}
